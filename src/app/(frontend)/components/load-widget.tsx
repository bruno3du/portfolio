import config from "@payload-config";
import { getPayload } from "payload";
import WehelpWidget from "./wehelp-widget";

export default async function LoadWidget() {
  const payload = await getPayload({ config });
  const wehelpConfig = await payload.findGlobal({ slug: "wehelp-config" });

  return (
    wehelpConfig.surveyToken && (
      <WehelpWidget
        surveyToken={wehelpConfig.surveyToken}
        type={wehelpConfig.type ?? "box"}
        messageOpen={wehelpConfig.messageOpen ?? 0}
        language={wehelpConfig.language ?? "PORTUGUESE"}
        experienceId={wehelpConfig.experienceId ?? null}
        internalCode={wehelpConfig.internalCode ?? ""}
        name={wehelpConfig.name ?? ""}
        email={wehelpConfig.email ?? ""}
        phone={wehelpConfig.phone ?? ""}
        dateOfBirth={wehelpConfig.dateOfBirth ?? ""}
        state={wehelpConfig.state ?? ""}
        country={wehelpConfig.country ?? ""}
        gender={wehelpConfig.gender ?? ""}
        document={wehelpConfig.document ?? ""}
        companyUnit={wehelpConfig.companyUnit ?? ""}
        debug={wehelpConfig.debug ?? 0}
        customFields={wehelpConfig.customFields ?? []}
      />
    )
  );
}
