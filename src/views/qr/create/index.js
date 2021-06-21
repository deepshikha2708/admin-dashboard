import React, { useState } from "react";
import {
  CButton,
  CCard,
  CCardBody,
  CCardFooter,
  CCardHeader,
  CContainer,
  CCol,
  CCollapse,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
  CFade,
  CForm,
  CFormGroup,
  CFormText,
  CValidFeedback,
  CInvalidFeedback,
  CTextarea,
  CInput,
  CInputFile,
  CInputCheckbox,
  CInputRadio,
  CInputGroup,
  CInputGroupAppend,
  CInputGroupPrepend,
  CDropdown,
  CInputGroupText,
  CLabel,
  CSelect,
  CRow,
  CSwitch,
} from "@coreui/react";
import CIcon from "@coreui/icons-react";
import QRcode from "qrcode.react";
import { Fab, TextField, TextareaAutosize, Grid } from "@material-ui/core";
import { ArrowBack, GetApp } from "@material-ui/icons";

const Index = () => {
  const [qr, setQr] = useState("CryptoMedTrack");
  const handleChange = (event) => {
    setQr(event.target.value);
  };
  const downloadQR = () => {
    const canvas = document.getElementById("myqr");
    const pngUrl = canvas
      .toDataURL("image/png")
      .replace("image/png", "image/octet-stream");
    let downloadLink = document.createElement("a");
    downloadLink.href = pngUrl;
    downloadLink.download = "myqr.png";
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  };

  return (
      <CCard>
      <CCardBody>
      <center>
    <div>
      <CContainer>
        <CRow>
          <CCol sm="12">
            <CForm action="" method="post">
              <CFormGroup>
                <CLabel htmlFor="nf-email"><span className="display-3">Create Tag</span></CLabel>
                <CInput
                  type="text"
                  id="nf-email"
                  name="nf-email"
                  placeholder="ID . . ."
                  onChange={handleChange}
                  value={qr}
                />
                <CFormText className="help-block">
                  Enter medicine serial code
                </CFormText>
              </CFormGroup>
            </CForm>
            <div >
              {qr ? (
                <QRcode id="myqr" value={qr} size={320} includeMargin={true} />
              ) : (
                <p>No QR code preview</p>
              )}
            </div>
            {qr ? (
                <Grid container>
                  <Grid item xs={10}>
                    
                  </Grid>
                  <Grid item xs={2}>
                    <Fab
                      onClick={downloadQR}
                      style={{ marginLeft: 10 }}
                      color="primary"
                    >
                      <GetApp />
                    </Fab>
                  </Grid>
                </Grid>
              ) : (
                ""
              )}
          </CCol>
        </CRow>
        

        
      </CContainer>
    </div>
    </center>
    </CCardBody>
    </CCard>
  );
};

export default Index;
