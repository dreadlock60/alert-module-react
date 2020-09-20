import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

const Alert = ({ alerts }) =>
  alerts !== null &&
  alerts.length > 0 &&
  alerts.map((alert) => (
    <div
      key={alert.id}
      className={`text-${alert.alertType}  large round bg-white`}
      style={{
        display: " inline-block",
        alignItems: "center",
        borderRadius: 5,
        position: "fixed",
        right: "2vw",
        zIndex: 1,
      }}
    >
      <table
        style={{
          fontSize: 20,
        }}
      >
        <tr>
          <td>
            <i className="fas fa-info-circle "></i>
          </td>
          <td
            style={{
              fontSize: 25,
              display: "inline-flex",
              background: "#f7f7f7",
              padding: "6px 0px 10px 10px",
            }}
          >
            {alert.msg}
          </td>
        </tr>
      </table>
    </div>
  ));

Alert.propTypes = {
  alerts: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => ({
  alerts: state.alert,
});

export default connect(mapStateToProps)(Alert);
