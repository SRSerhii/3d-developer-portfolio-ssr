import PrivacyPolicy from "../pages/PrivacyPolicy";
import PrivacyPolicyUa from "../pages/uk/PrivacyPolicy_ua";
import { useTranslation } from 'react-i18next';

const privacyComponents = {
  en: PrivacyPolicy,
  uk: PrivacyPolicyUa,
};

const PrivacyWrapper = () => {
  const { t, i18n } = useTranslation("common");
  const SelectedPrivacyComponent = privacyComponents[i18n.language] || privacyComponents.en;

  return (
    <div className='container mx-auto px-4 py-8'>
      <SelectedPrivacyComponent />
    </div>
  );
};

export default PrivacyWrapper;