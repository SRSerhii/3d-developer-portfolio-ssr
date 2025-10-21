import { json, type LoaderFunctionArgs, type MetaFunction } from "@remix-run/node";
import { useTranslation } from "react-i18next";
import { Link, useParams } from "react-router-dom";

export async function loader({ request }: LoaderFunctionArgs) {
  const url = new URL(request.url).toString();
  return json({ url });
}

export const meta: MetaFunction<typeof loader> = ({ data }) => {
  if (!data) return [];
  const { t, i18n } = useTranslation("common");
  const loc = data.url;

  return [
    { title: t("thankYou.title") },
    { name: "description", content: t("thankYou.description") },
    { tagName: "link", rel: "canonical", href: loc },
    { name: "robots", content: "index, follow" },

    { property: "og:type", content: "website" },
    { property: "og:url", content: loc },
    { property: "title", content: t("thankYou.title") },
    { property: "og:description", content: t("thankYou.description") },
    { property: "og:locale", content: t("meta.OgLocale") },

    { property: "twitter:card", content: "summary_large_image" },
    { property: "twitter:site", content: loc },
    { property: "twitter:title", content: t("thankYou.title") },
    { property: "twitter:description", content: t("thankYou.description") },
    { property: "twitter:creator", content: t("meta.author") },

  ];
};

export default function Index() {
  const { lang } = useParams();
  const { t, i18n } = useTranslation();

  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>

            <main className="min-h-screen flex items-center justify-center p-6">
                <div className="max-w-xl text-center">
                    <h1 className="text-4xl font-bold mb-4">{t?.("thankYou.title", "Thank You!")}</h1>
                    <p className="mb-6">{t?.("thankYou.description", "Your message has been sent successfully! I'll get back to you as soon as possible.")}</p>
                    <div>
                        <Link to="/" className="inline-block px-4 py-2 bg-blue-600 text-white rounded">
                            {t?.("thankYou.homeLink", "Go to homepage")}
                        </Link>
                    </div>
                </div>
            </main>
    </div>
  );
}
