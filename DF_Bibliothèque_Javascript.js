function hideTabAvisANima(executionContext) {
    formContext = executionContext.getFormContext();
    var tabObj = formContext.ui.tabs.get("tab_4");
    var leadSource = formContext.getAttribute("tnl_leadsource").getValue();
  
    if (leadSource == 932180003) {
      tabObj.setVisible(true);
    }
    else {
      tabObj.setVisible(false);
    }
  }

  function hideSpec(executionContext) {
    formContext = executionContext.getFormContext();
    var tpc = formContext.getAttribute("tnl_typedecontact").getValue();
  
    if (tpc == 932180002) {
        formContext.getControl("tnl_specialites").setVisible(true);
    }
    else {
        formContext.getControl("tnl_specialites").setVisible(false);
    }
  }

  function hideTabCoordoneesEvent(executionContext) {
    formContext = executionContext.getFormContext();
    var tabObj = formContext.ui.tabs.get("{677396e8-b9cc-4529-b078-fb2505243b34}");
    var sectionObj =  tabObj.sections.get("Adresse");
    var typeDevent = formContext.getAttribute("tnl_typedevenement").getValue();
  
    if (typeDevent == 932180001) {
        sectionObj.setVisible(false);
    }
    else {
        sectionObj.setVisible(true);
    }
  }