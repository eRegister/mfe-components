import PropTypes from "prop-types";
import React from "react";
import { I18nProvider } from "../../features/i18n/I18nProvider";
import styles from "./EntryComponent1.module.scss";

export default function EntryComponent2(props) {
  const { hostData } = props;
  return (
    <>
      <I18nProvider>
        <div>
          <h3>DEMO: passing in data</h3>
          <p className={styles.styledParagraph}>{hostData.textData}</p>
        </div>
      </I18nProvider>
    </>
  );
}

EntryComponent2.propTypes = {
  hostData: PropTypes.shape({
    textData: PropTypes.string.isRequired,
  }).isRequired,
  hostApi: PropTypes.shape({
    callback: PropTypes.func,
  }),
};
