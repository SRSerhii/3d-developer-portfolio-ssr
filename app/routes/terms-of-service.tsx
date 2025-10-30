import { json, type LoaderFunctionArgs, type MetaFunction } from "@remix-run/node";
import { useTranslation } from "react-i18next";
import { TermsOfServiceWrapper } from "~/components";

export async function loader({ request }: LoaderFunctionArgs) {
    const url = new URL(request.url).toString();
    return json({ url });
}

export const meta: MetaFunction<typeof loader> = ({ data }) => {
    if (!data) return [];
    const { t, i18n } = useTranslation("common");
    const loc = data.url;

    return [
        { title: t("meta.tos.title") },
        { name: "description", content: t("meta.tos.description") },
        { name: "author", content: t("meta.author") },
        { tagName: "link", rel: "canonical", href: loc },

        { property: "og:type", content: "article" },
        { property: "og:url", content: loc },
        { property: "title", content: t("meta.tos.title") },
        { property: "og:description", content: t("meta.tos.description") },
        { property: "og:image", content: t("meta.Img") },
        { property: "og:site_name", content: t("meta.author") },
        { property: "og:locale", content: t("meta.OgLocale") },

        { property: "twitter:card", content: "summary_large_image" },
        { property: "twitter:site", content: loc },
        { property: "twitter:title", content: t("meta.tos.title") },
        { property: "twitter:description", content: t("meta.tos.description") },
        { property: "twitter:image", content: t("meta.Img") },
        { property: "twitter:creator", content: t("meta.author") },

    ];
};

export default function Index() {

    return (
        <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
            <TermsOfServiceWrapper />
        </div>
    );
}