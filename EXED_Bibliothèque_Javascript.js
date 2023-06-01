function formOnLoadContact(executionContext) {
    var formContext = executionContext.getFormContext();
    formContext.getControl("parentcustomerid").setEntityTypes(["account"]);
  }
  
  
  function setMandatoryFieldsLeadINTRA(executionContext) {
    var formContext = executionContext.getFormContext();
    formContext.getAttribute("telephone1").setRequiredLevel("none");
    formContext.getAttribute("emailaddress1").setRequiredLevel("required");
  }
  
  function setMandatoryFieldsLeadMS(executionContext) {
    var formContext = executionContext.getFormContext();
    formContext.getAttribute("kedsc_civility_code").setRequiredLevel("required");
  }
  
  
  
  function filterOpportunityEXED(executionContext) {
    var formContext = executionContext.getFormContext();
    var Switch = formContext.getAttribute("ekd_isintra").setValue(true);
  
  }
  function SetRightEXEDDepartmentForLead(executionContext) {
    var formContext = executionContext.getFormContext();
    var formName = formContext.ui.formSelector.getCurrentItem().getLabel();
    var departementExed = formContext.getAttribute("ekd_dpartementexed").getValue();
  
    if (formName === "Prospect - Intra" && departementExed == null) {
        formContext.getAttribute("ekd_dpartementexed").setValue(962820000);
    }
  
  }
  
  function SetRightEXEDDepartmentForOpt(executionContext) {
    var formContext = executionContext.getFormContext();
    var formName = formContext.ui.formSelector.getCurrentItem().getLabel();
    var departementExed = formContext.getAttribute("ekd_dpartementexed").getValue();
    var produit = formContext.getAttribute("ekd_produit").getValue();
  
    if (formName === "OpportunitÃ© - Formulaire INTRA" && departementExed == null && produit == null) {
        formContext.getAttribute("ekd_dpartementexed").setValue(962820000);
    }
  }
  
  function RemoveLeadBPF(executionContext) {
    Xrm.Page.ui.process.setVisible(false);
  }
  
  function MandatoryFieldsProspect(executionContext) {
    var formContext = executionContext.getFormContext();
    formContext.getAttribute("telephone1").setRequiredLevel("none");
    formContext.getAttribute("emailaddress1").setRequiredLevel("required");
  
  }
  function lockFileField(executionContext) {
    var formContext = executionContext.getFormContext();
    var valideSup = formContext.getAttribute("ekd_validationmanagementsuperieura40000").getValue();
    var valideInf = formContext.getAttribute("ekd_validationmanagementinferieura40000").getValue();
  
  }
    if (valideSup = ! null && valideSup == 962820000) {
        formContext.getControl("ekd_fichier").setDisabled(true);
        formContext.getControl("ekd_budget").setDisabled(true);
        if(formContext.data.process.getActiveProcess() != null)
        {
        Xrm.Page.getControl("header_process_ekd_fichier").setDisabled(true);
        Xrm.Page.getControl("header_process_ekd_budget").setDisabled(true);
        }
  
    }
    else if (valideInf = ! null && valideInf == 962820000) {
        formContext.getControl("ekd_fichier").setDisabled(true);
        formContext.getControl("ekd_budget").setDisabled(true);
        if(formContext.data.process.getActiveProcess() != null)
        {
        Xrm.Page.getControl("header_process_ekd_fichier").setDisabled(true);
        Xrm.Page.getControl("header_process_ekd_budget").setDisabled(true);
        }
    }
    else {
        formContext.getControl("ekd_fichier").setDisabled(false);
        formContext.getControl("ekd_budget").setDisabled(false);
        if(formContext.data.process.getActiveProcess() != null)
        {
        Xrm.Page.getControl("header_process_ekd_fichier").setDisabled(false);
        Xrm.Page.getControl("header_process_ekd_budget").setDisabled(false);
        }
  
    }
  
  function hideTabAvisANima(executionContext) {
    formContext = executionContext.getFormContext();
    var tabObj = formContext.ui.tabs.get("Summary");
    var sectionAvisAnima9 = tabObj.sections.get("Summary_section_9");
    var sectionAvisAnima10 = tabObj.sections.get("Summary_section_10");
    var debouchePartenariatPedagogique = formContext.getAttribute("ekd_typedinteraction").getValue();
  
    if (debouchePartenariatPedagogique == 962820003) {
        sectionAvisAnima10.setVisible(true);
        sectionAvisAnima9.setVisible(true);
    }
    else {
        sectionAvisAnima10.setVisible(false);
        sectionAvisAnima9.setVisible(false);
    }
  }
  
  function GardeFouDatesOpportuniteDateDebut(executionContext) {
    formContext = executionContext.getFormContext();
    var DateDebut = formContext.getAttribute("ekd_datededbutdeproduction").getValue();
    var DateFin = formContext.getAttribute("ekd_datedefindeproduction").getValue();
  
    if (DateDebut != null && DateFin != null){
        if (DateDebut>DateFin) {
            alert('La date de dÃ©but ne peut pas Ãªtre avant la date de fin !');
            formContext.getAttribute('ekd_datededbutdeproduction').setValue(null);
        }
    }
  }
  function GardeFouDatesOpportuniteDateFin(executionContext) {
    formContext = executionContext.getFormContext();
    var DateDebut = formContext.getAttribute("ekd_datededbutdeproduction").getValue();
    var DateFin = formContext.getAttribute("ekd_datedefindeproduction").getValue();
  
    if (DateDebut != null && DateFin != null){
        if (DateDebut>DateFin) {
            alert('La date de dÃ©but ne peut pas Ãªtre avant la date de fin !');
            formContext.getAttribute('ekd_datedefindeproduction').setValue(null);
        }
    }
  }
  
  function choixProcessusCommercial(executionContext)
      {
          var formContext = executionContext.getFormContext();
              if(formContext.data.process.getActiveProcess() != null)
              {
                  //Check Type & BPF match as required
                  var currentBpfID = formContext.data.process.getActiveProcess().getId();
                  if(formContext.getAttribute("ekd_processuscommercialsouhaite"))
                  {
                      var leadType = formContext.getAttribute("ekd_processuscommercialsouhaite").getValue();
                      if(leadType == "962820000" && currentBpfID != "e7679f7e-3538-ed11-9db1-000d3adf7c75") // BPF MS
                         formContext.data.process.setActiveProcess("e7679f7e-3538-ed11-9db1-000d3adf7c75");
                      else  if(leadType == "962820001" && currentBpfID != "9d6276ab-c038-ed11-9db1-000d3adf7c75") // BPF EC-CC
                         formContext.data.process.setActiveProcess("9d6276ab-c038-ed11-9db1-000d3adf7c75");
                  }
              }
      }


      /* En dessous se trouve l'ancienne code JS en couche unmanaged */


      function checkSwitchBPFbyType(executionContext) {

        // MS	100000000 | Process Flow MS : e7679f7e-3538-ed11-9db1-000d3adf7c75 (962820000)
        // EC/CC       	100000001 | Process Flow EC/CC : 9d6276ab-c038-ed11-9db1-000d3adf7c75 (962820001)
        var formContext = executionContext.getFormContext();

            if(formContext.data.process.getActiveProcess() != null)
            {
                //Check Type & BPF match as required
                var currentBpfID = formContext.data.process.getActiveProcess().getId();
                if(formContext.getAttribute("ekd_processuscommercialsouhaite"))
                {
                    var leadType = formContext.getAttribute("ekd_processuscommercialsouhaite").getValue();
                    if(leadType == "962820000" && currentBpfID != "e7679f7e-3538-ed11-9db1-000d3adf7c75")
                       formContext.data.process.setActiveProcess("e7679f7e-3538-ed11-9db1-000d3adf7c75");
                    else  if(leadType == "962820001" && currentBpfID != "9d6276ab-c038-ed11-9db1-000d3adf7c75")
                       formContext.data.process.setActiveProcess("9d6276ab-c038-ed11-9db1-000d3adf7c75");
                }
            }
            else {
                if(leadType == "962820000")
                formContext.data.process.setActiveProcess("e7679f7e-3538-ed11-9db1-000d3adf7c75");
             else  if(leadType == "962820001")
                formContext.data.process.setActiveProcess("9d6276ab-c038-ed11-9db1-000d3adf7c75");
            }
    }

function formOnLoad(executionContext) {
  var formContext = executionContext.getFormContext();
  formContext.getControl("customerid").setEntityTypes(["account"]);
  formContext.data.process.setActiveProcess('EFD5D121-F16E-4234-8607-362970359B25');
}