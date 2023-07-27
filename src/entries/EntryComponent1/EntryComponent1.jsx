import React from "react";
import PropTypes from "prop-types";
import styles from "./EntryComponent1.module.scss";
import { I18nProvider } from "../../features/i18n/I18nProvider";
import { Button } from "carbon-components-react";

export default function EntryComponent1(props) {
  const { hostData, hostApi } = props;
  return (
    <>
      <I18nProvider>
        <Button
          kind="primary"
          // notes: even though callback is required, use ?.() to be safe
          // react2angular adapter has trouble attaching functions on time and you
          // might run into errors on start
          onClick={() => hostApi.callback?.("event-from-demo-mfe")}
        >
          Demo of host callback
        </Button>

        <div>
          <h3>DEMO: patient uuid</h3>
          <p className={styles.styledParagraph}>
            patient uuid: {hostData.patient.uuid}
          </p>
        </div>
      </I18nProvider>
    </>
  );
}

EntryComponent1.propTypes = {
  hostData: PropTypes.shape({
    patient: PropTypes.shape({
      uuid: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
  hostApi: PropTypes.shape({
    callback: PropTypes.func,
  }),
};
