import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { json, type LoaderFunctionArgs, type MetaFunction } from "@remix-run/node";

export async function loader({ request }: LoaderFunctionArgs) {
  const url = new URL(request.url).toString();
  return json({ url });
}

export const meta: MetaFunction<typeof loader> = ({ data }) => {
  if (!data) return [];
  const { t, i18n } = useTranslation("common");
  const loc = data.url;

  return [
    { title: t("notFound.title") },
    { name: "description", content: t("notFound.description") },
    { tagName: "link", rel: "canonical", href: loc },
    { name: "robots", content: "index, follow" },

    { property: "og:type", content: "website" },
    { property: "og:url", content: loc },
    { property: "title", content: t("notFound.title") },
    { property: "og:description", content: t("notFound.description") },
    { property: "og:locale", content: t("meta.OgLocale") },

    { property: "twitter:card", content: "summary_large_image" },
    { property: "twitter:site", content: loc },
    { property: "twitter:title", content: t("notFound.title") },
    { property: "twitter:description", content: t("notFound.description") },
    { property: "twitter:creator", content: t("meta.author") },

  ];
};


export default function NotFound() {
    const { t } = useTranslation();

    return (
        <>

            <main className="min-h-screen flex items-center justify-center p-6">
                <div className="max-w-xl text-center">
                    <h1 className="text-4xl font-bold mb-4">{t?.("notFound.heading", "404")}</h1>
                    <p className="mb-6">{t?.("notFound.pageTitle", "The page you are looking for does not exist")}</p>
                    <div>
                        <Link to="/" className="inline-block px-4 py-2 bg-blue-600 text-white rounded">
                            {t?.("notFound.homeLink", "Go to homepage")}
                        </Link>
                    </div>
                </div>
            </main>
        </>
    );
}