function callMSFlowforRF(formContext) {
    var id = formContext.data.entity.getId();
    id = id.replace(/[{}]/g,"");
    var donvalide = formContext.getAttribute('ekd_donvalid').getValue();
    var rfactif = formContext.getAttribute('ekd_rfactif').getValue();
    var data = {
      id: id
    };
  
    if (donvalide === true) {
      if (rfactif === false) {
        alert('Merci de patienter, nous générons le document !');
  
        // Envoyer la variable en format JSON
        fetch('https://prod-91.westeurope.logic.azure.com:443/workflows/12e3a47df3be45b882e946f4b8972409/triggers/manual/paths/invoke?api-version=2016-06-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=gWb73rP3Giv8M-JxloMB9xYBQeb1AB7YF2HxV2RoEgI', {
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
            throw new Error('Error in fetching data');
          }
        })
        .then(data => {
          console.log('Success:', data);
          alert("Le document est en cours de création et apparaîtra d'ici quelques minutes, pensez à actualiser votre don pour faire apparaître le reçu fiscal");
        })
        .catch((error) => {
          console.error('Error:', error);
          alert("Une erreur s'est produite !");
        });
      } else {
        alert('Vous ne pouvez pas générer un reçu fiscal, car il y en a déjà un d\'actif!');
      }
    } else {
      alert('Merci de valider le don avant de générer un reçu fiscal!');
    }
  }


  function callMSFlowforRFannulation(formContext) {
    var id = formContext.data.entity.getId();
    id = id.replace(/[{}]/g,"");
    var donvalide = formContext.getAttribute('ekd_donvalid').getValue();
    var compteurrf = formContext.getAttribute('ekd_compteurrf').getValue();
    var data = {
        id: id
    };
  
    if (donvalide === true && compteurrf > 1) {
        if (confirm("Voulez-vous vraiment annuler le reçu fiscal lié à ce don ?")) {
            alert("Merci de patienter, nous générons le document !");
            // Envoyer la variable en format JSON
            fetch('https://prod-75.westeurope.logic.azure.com:443/workflows/e7953ab6867f4a8ba6a5de9eb47d13b9/triggers/manual/paths/invoke?api-version=2016-06-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=D_z05XC3haaQArxMLSYWU7NT0N0lwHtvtN20dj5BlDA', {
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
                    throw new Error('Error in fetching data');
                };
            })
            .then(data => {
                console.log('Success', data);
                alert("Le document est en cours de création et apparaîtra d'ici quelques minutes, pensez à actualiser votre don pour faire apparaître le reçu fiscal");
            })
            .catch((error) => {
                console.error('Error:', error);
                alert('Une erreur s\'est produite!');
            });
        } else {
            alert('Annulation de l\'opération');
        }
    } else {
        alert('Le don n\'a pas été validé, ou il n\'y a aucun reçu fiscal à annuler !');
    }
}
  
  
  
  
   


function callMSFlowforDREVCRTA() {
    var jsonData = JSON.stringify({
        "CRTAID": Xrm.Page.data.entity.getId(),
        "typededocument": "DREVCRTA"
    });
    var flowURL = 'https://prod-06.westeurope.logic.azure.com:443/workflows/c59eb8bb2e004bd3ac0c8d0c11991cfd/triggers/manual/paths/invoke?api-version=2016-06-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=1JSk76NubPVdmYlYpmUzG4PsMZznG6WOPHN9okNyZ84';
    alert('Merci de patienter, nous gÃ©nÃ©rons le document ! Attente de 15 secondes'),
        parent.$.ajax({
            url: flowURL,
            type: 'POST',
            //        dataType: 'json',
            headers: {
                'Content-Type': 'application/json'
            },
            data: jsonData,
            success: function (data, status) {

                // console.log(data);
                // console.log(status);

                if (status === 'success') {
                    alert('Le document a bien Ã©tÃ© gÃ©nÃ©rÃ© !');
                } else {
                    alert('Une erreur s\'est produite !');
                }
            },
            error: function (err) {
                alert('Une erreur s\'est produite !');
            }
        });
}

function callMSFlowforTA() {
    var jsonData = JSON.stringify({
        "ProspectionTaId": Xrm.Page.data.entity.getId(),
        "typededocument": "CreateProspectionTA"
    });
    var flowURL = 'https://prod-174.westeurope.logic.azure.com:443/workflows/936196cfbefe4079a2825cda687cdb28/triggers/manual/paths/invoke?api-version=2016-06-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=OAqvAUfWNu_gbNuLmm3Fl3Q_R_2HlRhm38uzqmznKJ8';

    var Taxeur = Xrm.Page.data.entity.attributes.get('jav_taxeurid').getValue();
    var Joker = Xrm.Page.data.entity.attributes.get('jav_jokerid').getValue();

    if (Taxeur != null && Joker != null) {
        alert('Merci de patienter, nous gÃ©nÃ©rons le document ! Attente de 15 secondes'),
            parent.$.ajax({
                url: flowURL,
                type: 'POST',
                //        dataType: 'json',
                headers: {
                    'Content-Type': 'application/json'
                },
                data: jsonData,
                success: function (data, status) {

                    // console.log(data);
                    // console.log(status);

                    if (status === 'success') {
                        alert('La Prospection TA a bien Ã©tÃ© gÃ©nÃ©rÃ©e !');
                    } else {
                        alert('Une prospection a dÃ©jÃ  Ã©tÃ© crÃ©Ã©e pour l\'annÃ©e en cours !');
                    }
                },
                error: function (err) {
                    alert('Une prospection a dÃ©jÃ  Ã©tÃ© crÃ©Ã©e pour l\'annÃ©e en cours !');
                }
            });
    }
    else {
        alert('Le taxeur ou le joker n\'est pas renseignÃ© !');
    }
}
function callMSFlowforRFannuel(formContext) {
    var id = formContext.data.entity.getId();
    id = id.replace(/[{}]/g,"");
    var data = {
      id: id
    };
    var anneeDuDernierRF = formContext.getAttribute('ekd_anneedurf').getValue();
    var currentTime = new Date();
    var year = currentTime.getFullYear();
    if (anneeDuDernierRF != year) {
    fetch('https://prod-144.westeurope.logic.azure.com:443/workflows/92cb36204c764593af2827602e8ad0d8/triggers/manual/paths/invoke?api-version=2016-06-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=Bbto1cIbVT_TUZGzHwEDh0ch_Ztq6DYiVsQ4HZLitLs', {
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
            throw new Error('Error in fetching data');
          };
        })
        .then(data => {
          console.log('Success', data);
          alert("Le document est en cours de création et apparaîtra d'ici quelques minutes, pensez à actualiser votre don pour faire apparaître le reçu fiscal");
         
        })
        .catch((error) => {
          console.error('Error:', error);
          alert('Une erreur s\'est produite!');
        });  
    }
    else {
        alert("Vous ne pouvez pas générer un reçu fiscal, car il y en a déjà  un d\'actif!")
    }


}
function callMSFlowforRFannulationannuel(formContext) {
    var id = formContext.data.entity.getId();
    id = id.replace(/[{}]/g,"");
    var data = {
      id: id
    };
    var compteurrf = formContext.getAttribute('ekd_compteurrf').getValue();
    if (compteurrf > 1) {
      if (confirm("Voulez-vous vraiment annuler ce reçu fiscal ?")) {
        alert('Merci de patienter, nous générons le document !');
        fetch('https://prod-85.westeurope.logic.azure.com:443/workflows/02d8216176e046019a7e81ac9e380446/triggers/manual/paths/invoke?api-version=2016-06-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=8FR6sz-3HdxKsC7qge1SbTrdg3OTimactpMqQMdpRN8', {
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
            throw new Error('Error in fetching data');
          }
        })
        .then(data => {
          console.log('Success', data);
          alert("Le document est en cours de création et apparaîtra d'ici quelques minutes, pensez à actualiser votre don pour faire apparaître le reçu fiscal");
        })
        .catch(error => {
          console.error('Error:', error);
          alert('Une erreur s\'est produite!');
        });
      } else {
        alert("L'opération est annulée");
      }
    } else {
      alert("Il n'y a aucun reçu fiscal à annuler !");
    }
  }
  



function callMSFlowforEnvoyerRF(formContext) {
    var id = formContext.data.entity.getId();
    id = id.replace(/[{}]/g,"");
    var data = {
      id: id
    };
    alert(id);
fetch('https://prod-192.westeurope.logic.azure.com:443/workflows/829e62cdc2a04a5e84d6fcf652d19521/triggers/manual/paths/invoke?api-version=2016-06-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=kigjeU5hr9jlwmdfxRh5Fe7rTfNl5osKApEuyTLU7yA', {
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
            throw new Error('Error in fetching data');
          };
        })
        .then(data => {
          console.log('Success', data);
            alert("La demande d'envoi a bien été prise en compte");
         
        })
        .catch((error) => {
          console.error('Error:', error);
          alert('Une erreur s\'est produite!');
        });
  }