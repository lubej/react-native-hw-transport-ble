/* @flow */
import React, { PureComponent, Fragment } from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { translate } from "react-i18next";
import { View, StyleSheet } from "react-native";
import { createStructuredSelector } from "reselect";
import colors from "../../../colors";
import SettingsRow from "../../../components/SettingsRow";
import type { T } from "../../../types/common";
import Warning from "../../../icons/Warning";
import ModalBottomAction from "../../../components/ModalBottomAction";
import BlueButton from "../../../components/BlueButton";
import GreyButton from "../../../components/GreyButton";
import Archive from "../../../icons/Archive";
import Circle from "../../../components/Circle";
import BottomModal from "../../../components/BottomModal";

const mapStateToProps = createStructuredSelector({});

type Props = {
  t: T,
};

type State = {
  isModalOpened: boolean,
};

class ClearCacheRow extends PureComponent<Props, State> {
  state = {
    isModalOpened: false,
  };

  onRequestClose = () => {
    this.setState({ isModalOpened: false });
  };

  onPress = () => {
    this.setState({ isModalOpened: true });
  };

  onClearCache = () => {
    console.log("Placeholder for clearing cache"); // eslint-disable-line no-console
  };

  render() {
    const { t } = this.props;
    const { isModalOpened } = this.state;

    return (
      <Fragment>
        <SettingsRow
          title={t("settings.help.clearCache")}
          desc={t("settings.help.clearCacheDesc")}
          iconLeft={
            <Circle bg="rgba(153,153,153,0.1)" size={32}>
              <Archive size={16} color={colors.grey} />
            </Circle>
          }
          onPress={this.onPress}
        />
        <BottomModal isOpened={isModalOpened} onClose={this.onRequestClose}>
          <ModalBottomAction
            title={null}
            icon={
              <Circle bg={colors.lightLive} size={56}>
                <Warning size={24} color={colors.live} />
              </Circle>
            }
            description={t("settings.help.clearCacheModalDesc")}
            footer={
              <View style={styles.footerContainer}>
                <GreyButton
                  title={t("common.cancel")}
                  onPress={this.onRequestClose}
                  containerStyle={styles.buttonContainer}
                  titleStyle={styles.buttonTitle}
                />

                <BlueButton
                  title={t("settings.help.clearCacheButton")}
                  onPress={this.onClearCache}
                  containerStyle={[styles.buttonContainer, styles.clearCacheBg]}
                  titleStyle={[styles.buttonTitle, styles.clearCacheTitle]}
                />
              </View>
            }
          />
        </BottomModal>
      </Fragment>
    );
  }
}

export default compose(
  connect(mapStateToProps),
  translate(),
)(ClearCacheRow);

const styles = StyleSheet.create({
  footerContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  buttonContainer: {
    height: 48,
    width: 136,
  },
  clearCacheBg: {
    backgroundColor: colors.live,
  },
  buttonTitle: {
    fontSize: 16,
  },
  clearCacheTitle: {
    color: colors.white,
  },
});
