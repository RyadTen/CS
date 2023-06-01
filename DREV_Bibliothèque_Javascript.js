function SetTodaysDateOnLoadDREV() {
  var currentDateTime = new Date();

  if (Xrm.Page.getAttribute("jav_datedeversement").getValue() == null) {
      Xrm.Page.getAttribute("jav_datedeversement").setValue(currentDateTime);
  }

}

onLoad = function(executionContext) {
  hideShowTab(executionContext);
  // applyFilterRecapCampagneFille(executionContext);
};


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
  var statutpartenariat = formContext.getAttribute("ekd_statutpartenariat").getValue()

      if (statutpartenariat == 200000001 || statutpartenariat == 200000002 || statutpartenariat == null) //Prospect ou Non Partenaire ou vide
      {
          formContext.getControl("ekd_datederenouvellement").setVisible(false);
          formContext.getControl("jav_niveaupartenariatcode").setVisible(false);
          formContext.getControl("ekd_typedepartenariat").setVisible(false);
          formContext.getAttribute("ekd_datederenouvellement").setValue(null);
          formContext.getAttribute("jav_niveaupartenariatcode").setValue(null);
          formContext.getAttribute("ekd_typedepartenariat").setValue(null);
          
      } else // Partenaire ou Cercle
      {
          formContext.getControl("ekd_datederenouvellement").setVisible(true);
          formContext.getControl("jav_niveaupartenariatcode").setVisible(true);
          formContext.getControl("ekd_typedepartenariat").setVisible(true);
      }
}

SetTodayDateforDemande = function (executionContext) {
  var formContext = executionContext.getFormContext();
  var dateDeDemande = formContext.getAttribute("ekd_datedelademande").getValue();


  if(dateDeDemande == null ) {
    var currentDate = new Date();
    formContext.getAttribute("ekd_datedelademande").setValue(currentDate);
  }
}

function setEntrepriseOnly(executionContext) {
  var formContext = executionContext.getFormContext();
  formContext.getControl("ekd_donateur").setEntityTypes(["account"]);
}


function setPromesseDon(executionContext) {
  var formContext = executionContext.getFormContext();
  formContext.getAttribute("statuscode").setValue(962820006);
}

/* CrÃ©ation d'appel Ã  cotisation

Table = Financement DREV 

*/

function CreateAppelCotisation(formContext) {
  var id = formContext.data.entity.getId();
  id = id.replace(/[{}]/g, "");
  var data = {
    id: id
  };
if (confirm("Voulez-vous gÃ©nÃ©rer l'appel Ã  cotisation pour ce financement ?")) {

  alert("Merci de patienter, le document est en cours de crÃ©ation !");
  // Envoyer la variable en format JSON
  fetch('https://prod-36.westeurope.logic.azure.com:443/workflows/9dd6d646d61141ab81dff41166cc3c12/triggers/manual/paths/invoke?api-version=2016-06-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=aCsEhi0cRrQYVeF4qyxSsp_UOqAh3MHaGlJfmn7BGrg', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
  })
  .then(response => {
      if (response.ok) {
          return response.json();
      } else {
          throw new Error('Une erreur s\'est produite');
      };
  })
  .then(data => {
    console.log('Success', data);
    setTimeout(function() {
      var reloadConfirmation = window.alert("Le document a Ã©tÃ© gÃ©nÃ©rÃ© avec succÃ¨s, veuillez recharger la page !");
     
    }, 20000);
  })
  .catch((error) => {
      console.error('Error:', error);
      alert('Une erreur s\'est produite !');
  });
} else {
alert("L\'opÃ©ration a Ã©tÃ© annulÃ©");
}
}



/* Fonction pour lock les champs prÃ©sent dans le BPF - Financement DREV au chargement de la page */

function hideButtonAc(executionContext) {
  var formContext = executionContext.getFormContext();
  var FromEng = formContext.getAttribute("ekd_formulairedengagement").getValue();
  var EtapeFin = formContext.getAttribute("ekd_etapedufinancement").getValue();
  var AppelC = formContext.getAttribute("ekd_appelacotisation").getValue();
  var RecuF = formContext.getAttribute("ekd_recufiscal").getValue();
  var Annee = formContext.getAttribute("ekd_anneescolaire").getValue();
 


  if ( FromEng == true || FromEng == false || FromEng == null || FromEng == undefined
    
  ) {
    formContext.getControl("header_process_ekd_formulairedengagement").setDisabled(true);
    formContext.getControl("header_process_ekd_appelacotisation").setDisabled(true);
    formContext.getControl("header_process_ekd_recufiscal").setDisabled(true);

  } else {
    formContext.getControl("header_process_ekd_formulairedengagement").setDisabled(false);
    formContext.getControl("header_process_ekd_appelacotisation").setDisabled(false);
    formContext.getControl("header_process_ekd_recufiscal").setDisabled(false);
  }
}

/* Fonction pour crÃ©er les formulaires d'engagement 

Table = Financement DREV */



function CreateFormulaireEngagement(formContext) {
  var id = formContext.data.entity.getId();
  id = id.replace(/[{}]/g, "");
  var data = {
    id: id
  };
  if (window.confirm("Voulez-vous gÃ©nÃ©rer le formulaire d'engagement pour ce financement ?")) {
    alert("Merci de patienter, le document est en cours de crÃ©ation !");
    // Envoyer la variable en format JSON
    fetch('https://prod-121.westeurope.logic.azure.com:443/workflows/ac995c19969843b78d44b4431de191f3/triggers/manual/paths/invoke?api-version=2016-06-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=OM9w5Ii-_ah8nT-A7VAMGDM82PYCqFPeid1O92EwiGQ', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    .then(response => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error("Une erreur s'est produite");
      };
    })
    .then(data => {
      console.log('Success', data);
      setTimeout(function() {
        var reloadConfirmation = window.alert("Le document a Ã©tÃ© gÃ©nÃ©rÃ© avec succÃ¨s, veuillez recharger la page !");
       
      }, 20000);
    })
    .catch((error) => {
      console.error('Error:', error);
      alert("Une erreur s'est produite !");
    });
  } else {
    alert("L'opÃ©ration a Ã©tÃ© annulÃ©e");
  }
}

function redirectToCurrentPage() {
  window.location.href = window.location.href;
}






  
function CreateRF(formContext) {
  var id = formContext.data.entity.getId();
  id = id.replace(/[{}]/g, "");
  var data = {
    id: id
  };
  if (window.confirm("Voulez-vous gÃ©nÃ©rer le ou les reÃ§us fiscaux pour ce financement ?")) {
    alert("Merci de patienter, le ou les documents sont en cours de crÃ©ation !");
    // Envoyer la variable en format JSON
    fetch('https://prod-50.westeurope.logic.azure.com:443/workflows/7835db6092ac4a74a25b269d3c1a7a27/triggers/manual/paths/invoke?api-version=2016-06-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=aB_wi0gHUYpVe-mXXlPb6rI6UyffwJiLlQFYDFll_zI', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    .then(response => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error("Une erreur s'est produite");
      };
    })
    .then(data => {
      console.log('Success', data);
      setTimeout(function() {
        var reloadConfirmation = window.alert("Le ou les documents ont Ã©tÃ© gÃ©nÃ©rÃ© avec succÃ¨s, veuillez recharger la page !");
       
      }, 40000);
    })
    .catch((error) => {
      console.error('Error:', error);
      alert("Une erreur s'est produite !");
    });
  } else {
    alert("L'opÃ©ration a Ã©tÃ© annulÃ©e");
  }
}

function redirectToCurrentPage() {
  window.location.href = window.location.href;
}




function AnnulationRF(formContext) {
  var id = formContext.data.entity.getId();
    var recuFi = formContext.getAttribute("ekd_recufiscal").getValue();
  id = id.replace(/[{}]/g, "");
  var data = {
    id: id
  };
  if (window.confirm("Voulez-vous gÃ©nÃ©rer le ou les documents permettant l'annulation du ou des reÃ§us fiscaux pour ce financement ?")) {
    if (recuFi !== false) {
    alert("Merci de patienter, le ou les documents sont en cours de crÃ©ation !");
    // Envoyer la variable en format JSON
    fetch('https://prod-204.westeurope.logic.azure.com:443/workflows/f7aa0779e78f41c8b08616e6863a66b5/triggers/manual/paths/invoke?api-version=2016-06-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=DtIgtiPiq4gqDO6TmNcW8biTqolUSlS9pl-UxQqs6O4', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    .then(response => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error("Une erreur s'est produite");
      };
    })
    .then(data => {
      console.log('Success', data);
      setTimeout(function() {
        var reloadConfirmation = window.alert("Le ou les documents d'annulation ont Ã©tÃ© gÃ©nÃ©rÃ© avec succÃ¨s, veuillez recharger la page !");
       
      }, 40000);
    })
    .catch((error) => {
      console.error('Error:', error);
      alert("Une erreur s'est produite !");
    });
    } else {
      alert("Il n'y pas de reÃ§u fiscal actif Ã  annuler !");
    }
  } else {
    alert("L'opÃ©ration a Ã©tÃ© annulÃ©e");
  }
}

function redirectToCurrentPage() {
  window.location.href = window.location.href;
}



function AnnulationAC(formContext) {
  var id = formContext.data.entity.getId();
  var appelacotisation = formContext.getAttribute("ekd_appelacotisation").getValue();
  id = id.replace(/[{}]/g, "");
  var data = {
    id: id
  };
  if (window.confirm("Voulez-vous gÃ©nÃ©rer le ou les documents permettant l'annulation d'appel(s) Ã  cotisation(s) pour ce financement ?")) {
    
    if (appelacotisation !== false) {
      alert("Merci de patienter, le ou les documents sont en cours de crÃ©ation !");
      // Envoyer la variable en format JSON
      fetch('https://prod-236.westeurope.logic.azure.com:443/workflows/087bf0536b5e41ad9f4a3083c9bdbbaf/triggers/manual/paths/invoke?api-version=2016-06-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=M1Msw7eQLBOZZvpKEovziaTnus89qncT-N1yZH6w57M', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      })
        .then(response => {
          if (response.ok) {
            return response.json();
          } else {
            throw new Error("Une erreur s'est produite");
          }
        })
        .then(data => {
          console.log('Success', data);
          setTimeout(function () {
            var reloadConfirmation = window.alert("Le ou les documents d'annulation ont Ã©tÃ© gÃ©nÃ©rÃ©s avec succÃ¨s, veuillez recharger la page !");
          }, 40000);
        })
        .catch((error) => {
          console.error('Error:', error);
          alert("Une erreur s'est produite !");
        });
    } else {
      alert("Il n'y pas d'appel(s) Ã  cotisation actif(s) Ã  annuler !");
    }
  } else {
    alert("L'opÃ©ration a Ã©tÃ© annulÃ©e");
  }
}

function redirectToCurrentPage() {
  window.location.href = window.location.href;
}
