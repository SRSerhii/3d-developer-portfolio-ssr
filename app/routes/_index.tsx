import { json, redirect, type LoaderFunctionArgs, type MetaFunction } from "@remix-run/node";
import { useTranslation } from "react-i18next";
import Hero from '~/components/Hero';
import ServicesSection from "~/components/ServicesSection";
import Contact from '~/components/Contact';
import ToolsSection from '~/components/ToolsSection';
import Experience from '~/components/Experience';
import Projects from '~/components/Projects';
import StarsCanvas from '~/components/canvas/Stars';
import { useParams } from "react-router-dom";
import i18next from "~/localization/i18n.server";

  export async function loader({ request, params }: LoaderFunctionArgs) {
  if (!params.lang) {
    // Detect the user's preferred language from the Accept-Language header
    const locale = await i18next.getLocale(request);

    // Construct the new URL with the detected locale
    const url = new URL(request.url);
    url.pathname = `/${locale}${url.pathname}`;

    // Redirect the user to the new language-specific URL
    return redirect(url.toString());
  }

  // If 'lang' is already in the URL, proceed as normal
  const url = new URL(request.url).toString();
  return json({ url });
}

export const meta: MetaFunction<typeof loader> = ({ data }) => {
  if (!data) return [];
  const { t, i18n } = useTranslation("common");
  const loc = data.url;

  return [
    { title: t("meta.title") },
    { name: "description", content: t("meta.description") },
    { name: "keywords", content: t("meta.keywords") },
    { name: "author", content: t("meta.author") },
    { tagName: "link", rel: "canonical", href: loc },
    { name: "robots", content: "index, follow" },

    { property: "og:type", content: "website" },
    { property: "og:url", content: loc },
    { property: "title", content: t("meta.title") },
    { property: "og:description", content: t("meta.description") },
    { property: "og:image", content: t("meta.Img") },
    { property: "og:site_name", content: t("meta.author") },
    { property: "og:locale", content: t("meta.OgLocale") },

    { property: "twitter:card", content: "summary_large_image" },
    { property: "twitter:site", content: loc },
    { property: "twitter:title", content: t("meta.title") },
    { property: "twitter:description", content: t("meta.description") },
    { property: "twitter:image", content: t("meta.Img") },
    { property: "twitter:creator", content: t("meta.author") },

  ];
};

export default function Index() {
  const { lang } = useParams();
  const { t, i18n } = useTranslation();

  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>

      <Hero />
      <ServicesSection />
      <Experience />
      <ToolsSection />
      <Projects />
      <div className="relative z-0">
        <Contact />
        <StarsCanvas />
      </div>
    </div>
  );
}
