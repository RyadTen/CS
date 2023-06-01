onLoad = function(executionContext) {
    hideShowTab(executionContext);
    // applyFilterRecapCampagneFille(executionContext);
  };
  
  applyFilterRecapCampagneFille = function(executionContext) {
    var formContext = executionContext.getFormContext();
    var tabObj = formContext.ui.tabs.get("tab_8");
    var secObj = tabObj.sections.get("sec_CampagnesFilles");
    secObj.setVisible(false)
  
    // var firstName = formContext.getAttribute("firstname").getValue();
    // var lastName = formContext.getAttribute("lastname").getValue();
  
    // if (firstName == null || lastName == null) {
    //     setTimeout(function () { FetchViaName(executionContext); }, 2000);
    //     return;
    // }
  
    // var fullname = firstName + " " + lastName;
    // console.log("fetch compaignsContact: " + fullname);
  
    var currentleadId = Xrm.Page.data.entity.getId();
    if (currentleadId) {
        var fetchXml = '<fetch distinct="false" no-lock="false" mapping="logical" >' +
            '<entity name="jav_taxedapprentissage" >' +
            '  <attribute name="jav_name" />' +
            '  <attribute name="jav_entrepriseid" />' +
            '  <attribute name="jav_cumulversementquota" />' +
            '  <attribute name="jav_cumulversementhorsquota" />' +
            '  <attribute name="jav_anneescolairecode" />' +
            '  <attribute name="jav_anneecode" />' +
            '  <attribute name="jav_taxedapprentissageid" />' +
            '  <filter type="and" >' +
            '    <condition attribute="jav_taxedapprentissageid" operator="under" value="' + currentleadId + '" />' +
            '    <condition attribute="statecode" operator="eq" value="0" />' +
            '  </filter>' +
            '  <order attribute="jav_name" descending="false" />' +
            '</entity>' +
        '</fetch>';
  
        var campagnesFillesControl = formContext.getControl("CampagnesFilles");
  
        if (campagnesFillesControl == null) {
            setTimeout(function () { applyFilterRecapCampagneFille(executionContext); }, 2000);
            return;
        } else {
            console.log(campagnesFillesControl.getGrid().getTotalRecordCount());
            console.log(fetchXml);
            campagnesFillesControl.setFilterXml(fetchXml);
            campagnesFillesControl.refresh();
            // console.log(campagnesFillesControl.getGrid().getTotalRecordCount());
            secObj.setVisible(true);
            
            
        }
    }
  }
  
  
  hideShowTab = function(executionContext) {
    var formContext = executionContext.getFormContext();
  
    var partenariat = formContext.getAttribute("ekd_partenariatgrsurcettecampagne").getValue();
  
    if (partenariat) {
        Xrm.Page.ui.tabs.get("tab_4").setVisible(true);
        Xrm.Page.ui.tabs.get("Actions").setVisible(true);
    } else {
        Xrm.Page.ui.tabs.get("tab_4").setVisible(false);
        Xrm.Page.ui.tabs.get("Actions").setVisible(false);
    }
  
  
    var campagne_mere = formContext.getAttribute("ekd_cettecampagneestlacampagnemre").getValue();
  
    if (campagne_mere ) {
        Xrm.Page.ui.tabs.get("tab_8").setVisible(true);
    } else {
        Xrm.Page.ui.tabs.get("tab_8").setVisible(false);
    }
  
  }
  
  HideNiveauEtTypePartenariat = function(executionContext) {
    var formContext = executionContext.getFormContext();
  
    var StatutPartenariat = formContext.getAttribute("ekd_statutpartenariat").getValue();
  
    if (StatutPartenariat != null) {
        if (StatutPartenariat == 200000001 || StatutPartenariat == 200000002) //Prospect ou Non Partenaire
        {
          formContext.getControl("jav_niveaupartenariatcode").setVisible(false);
          formContext.getControl("ekd_typedepartenariat").setVisible(false);
          formContext.getControl("ekd_datederenouvellement").setVisible(false);
          formContext.getAttribute("jav_niveaupartenariatcode").setValue(null);
          formContext.getAttribute("ekd_typedepartenariat").setValue(null);
          formContext.getAttribute("ekd_datederenouvellement").setValue(null);

        } else
        {
          formContext.getControl("jav_niveaupartenariatcode").setVisible(true);
          formContext.getControl("ekd_typedepartenariat").setVisible(true);
          formContext.getControl("ekd_datederenouvellement").setVisible(true);

        }
    }
  
  }