import TermsOfService from "../pages/TermsOfService";
import TermsOfService_ua from "../pages/uk/TermsOfService_ua";
import { useTranslation } from 'react-i18next';

const termsComponents = {
  en: TermsOfService,
  uk: TermsOfService_ua,
};

const TermsOfServiceWrapper = () => {
  const { t, i18n } = useTranslation("common");
  const SelectedTermsComponent = termsComponents[i18n.language] || termsComponents.en;

  return (
    <div className='container mx-auto px-4 py-8'>
      <SelectedTermsComponent />
    </div>
  );
};

export default TermsOfServiceWrapper;