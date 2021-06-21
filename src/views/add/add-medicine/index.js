import React from "react";
import {
  CButton,
  CCard,
  CCardBody,
  CCardFooter,
  CCardHeader,
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

// Manf. = name, patch. No production date manufacturing location, manufacturer Information

const Index = () => {
  const [collapsed, setCollapsed] = React.useState(true);
  const [showElements, setShowElements] = React.useState(true);

  return (
    <>
      <CCard>
        <CCardHeader>
          <h2 className="row justify-content-md-center">
            Enter medicine to BlockChain{" "}
            <CIcon size={"xl"} name={"cil-credit-card"} />
          </h2>
        </CCardHeader>
        <CCardBody>
          <CForm
            action=""
            method="post"
            encType="multipart/form-data"
            className="form-horizontal"
          >
            <CFormGroup row>
              <CCol md="3">
                <CLabel htmlFor="text-input">Medicine Name</CLabel>
              </CCol>
              <CCol xs="12" md="9">
                <CInput id="text-input" name="text-input" placeholder="Text" />
                
              </CCol>
            </CFormGroup>

            <CFormGroup row>
              <CCol md="3">
                <CLabel htmlFor="text-input">Patch No</CLabel>
              </CCol>
              <CCol xs="12" md="9">
                <CInput id="text-input" name="text-input" placeholder="Text" />
                
              </CCol>
            </CFormGroup>

            
            
            
            <CFormGroup row>
              <CCol md="3">
                <CLabel htmlFor="date-input">Production Date</CLabel>
              </CCol>
              <CCol xs="12" md="9">
                <CInput
                  type="date"
                  id="date-input"
                  name="date-input"
                  placeholder="date"
                />
              </CCol>
            </CFormGroup>

            <CFormGroup row>
              <CCol md="3">
                <CLabel htmlFor="text-input">Manufacture Location</CLabel>
              </CCol>
              <CCol xs="12" md="9">
                <CInput id="text-input" name="text-input" placeholder="Text" />
                
              </CCol>
            </CFormGroup>
            
            <CFormGroup row>
              <CCol md="3">
                <CLabel htmlFor="textarea-input">Manufacture Info</CLabel>
              </CCol>
              <CCol xs="12" md="9">
                <CTextarea
                  name="textarea-input"
                  id="textarea-input"
                  rows="9"
                  placeholder="Content..."
                />
              </CCol>
            </CFormGroup>
            
            
            
            
            
            
            
            <CFormGroup row>
              <CCol md="3">
                <CLabel>Upload Licence</CLabel>
              </CCol>
              <CCol xs="12" md="9">
                <CInputFile
                  id="file-multiple-input"
                  name="file-multiple-input"
                  multiple
                  custom
                />
                <CLabel htmlFor="file-multiple-input" variant="custom-file">
                  Choose Files...
                </CLabel>
              </CCol>
            </CFormGroup>
            
          </CForm>
        </CCardBody>
        <CCardFooter>
          <CButton type="submit" size="sm" color="primary">
            <CIcon name="cil-scrubber" /> Submit
          </CButton>
          <CButton type="reset" size="sm" color="danger">
            <CIcon name="cil-ban" /> Reset
          </CButton>
        </CCardFooter>
      </CCard>
    </>
  );
};

export default Index;
