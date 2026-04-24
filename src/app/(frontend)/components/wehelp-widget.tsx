"use client";

import Script from "next/script";

interface WehelpWidgetProps {
  surveyToken: string;
  type: string;
  messageOpen: number;
  language: string;
  experienceId: string | null;
  internalCode: string;
  name: string;
  email: string;
  phone: string;
  dateOfBirth: string;
  state: string;
  country: string;
  gender: string;
  document: string;
  companyUnit: string;
  customFields?: { name: string; value: string }[];
  debug: number;
}

export default function WehelpWidget({
  surveyToken,
  type,
  messageOpen,
  language,
  companyUnit,
  experienceId,
  internalCode,
  name,
  email,
  phone,
  dateOfBirth,
  state,
  country,
  gender,
  document,
  customFields,
  debug = 0,
}: WehelpWidgetProps) {
  const customFieldsArray = customFields?.map((field) => {
    return {
      name: field.name,
      value: field.value,
    };
  });

  const preparewehelpConfig = {
    debug: debug,
    survey_token: surveyToken,
    type: type,
    message_open: messageOpen,
    language: language,
    company_unit: companyUnit,
    experience_id: experienceId,
    person: {
      internal_code: internalCode,
      name: name,
      email: email,
      type: "CUSTOMER",
      phone: phone,
      date_of_birth: dateOfBirth,
      language: language,
      created_at: "2018-05-05",
      state: state,
      country: country,
      gender: gender,
      document: document,
      company_unit: companyUnit,
    },
    custom_fields: customFieldsArray,
  };

  return (
    <>
      <div id="root-wehelp"></div>
      <Script
        id="wehelp-script-load"
        type="text/javascript"
        src="https://cdn.wehelpsoftware.com/survey-site/load.js"
      ></Script>
      <Script
        id="wehelp-script"
        type="text/javascript"
        dangerouslySetInnerHTML={{
          __html: `
          window.onload = function() {
            var wehelpCustomerInfo = ${JSON.stringify(preparewehelpConfig)};
  
            loadWeHelpWidgetScreen('https://respflow.wehelpsoftware.com', wehelpCustomerInfo, 'root-wehelp');
          }
        `,
        }}
      ></Script>
    </>
  );
}
