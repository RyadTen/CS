/* 

Script pour la fondation, fonction pour gÃ©nÃ©ration / annulation / envoi des RF

*/


/*

mainFormRFCreation = CrÃ©ation d'un RF dans le main form 
    
(Table = Dons)

*/

function mainFormRFCreation(formContext) {
    var id = formContext.data.entity.getId();
    id = id.replace(/[{}]/g,"");
    var donvalide = formContext.getAttribute('ekd_donvalid').getValue();
    var rfactif = formContext.getAttribute('ekd_rfactif').getValue();
    var data = {
      id: id
    };
  
    if (donvalide === true) {
      if (rfactif === false) {
        alert('Merci de patienter, CrÃ©ation du reÃ§u fiscal en cours !');
  
        // Envoyer la variable en format JSON
        fetch('https://prod-178.westeurope.logic.azure.com:443/workflows/c19b119874564826b13d791b3f5aa9f3/triggers/manual/paths/invoke?api-version=2016-06-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=9l1an-Y6DRsnRqX4aMORlLphT4FRbAn2lMHxQk5oMnA', {
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
          }
        })
        .then(data => {
          console.log('Success:', data);
          alert("Le reÃ§u fiscal est en cours de crÃ©ation et apparaitra d\'ici quelques minutes, pensez Ã  actualiser votre page !");
        })
        .catch((error) => {
          console.error('Error:', error);
          alert("Une erreur s\'est produite !");
        });
      } else {
        alert('Vous ne pouvez pas gÃ©nÃ©rer de reÃ§u fiscal, car il y en a dÃ©jÃ  un d\'actif !');
      }
    } else {
      alert('Merci de valider le don avant de gÃ©nÃ©rer un reÃ§u fiscal!');
    }
  }

/* 

mainFormRFAnnulation = Annulation d'un RF dans le main form 

(Table = Dons)

*/

  function mainFormRFAnnulation(formContext) {
    var id = formContext.data.entity.getId();
    id = id.replace(/[{}]/g,"");
    var donvalide = formContext.getAttribute('ekd_donvalid').getValue();
    var compteurrf = formContext.getAttribute('ekd_compteurrf').getValue();
    var data = {
        id: id
    };
  
    if (compteurrf > 1) {
        if (confirm("Voulez-vous annuler le reÃ§u fiscal liÃ© Ã  ce don ?")) {
            alert("Merci de patienter, le reÃ§u fiscal est en cours d\'annulation !");
            // Envoyer la variable en format JSON
            fetch('https://prod-76.westeurope.logic.azure.com:443/workflows/8ca4afa817454927b250c7dcca6ab71c/triggers/manual/paths/invoke?api-version=2016-06-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=dznieMB9QoHpC4UVqBbnamOyKSHP7nLMPHd3llhajhI', {
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
                alert("Le courrier confirmant l\'annulation du reÃ§u fiscal est en cours de crÃ©ation et apparaÃ®tra d\'ici quelques minutes, pensez Ã   actualiser votre page !");
            })
            .catch((error) => {
                console.error('Error:', error);
                alert('Une erreur s\'est produite !');
            });
        } else {
        alert("L\'opÃ©ration a Ã©tÃ© annulÃ©e");
        }
    } else {
        alert('Il n\'y a aucun reÃ§u fiscal Ã  annuler !');
    }
}
  
  
 
  /* 

mainFormRFAnnuelCreation = CrÃ©ation d'un RF annuel dans le main form 

(Table = PrÃ©lÃ Â¨vement automatique)

*/
   


function mainFormRFAnnuelCreation(formContext) {
    var id = formContext.data.entity.getId();
    id = id.replace(/[{}]/g,"");
    var data = {
      id: id
    };
    var anneeDuDernierRF = formContext.getAttribute('ekd_anneedurf').getValue();
    var currentTime = new Date();
    var year = currentTime.getFullYear();
    if (anneeDuDernierRF != year) {
    alert('Merci de patienter, CrÃ©ation du reÃ§u fiscal en cours !');
    fetch('https://prod-119.westeurope.logic.azure.com:443/workflows/e4c7685a0a6e4af0a4f3bcc228270227/triggers/manual/paths/invoke?api-version=2016-06-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=9cMf8SzuJsMcT6BELFVPTINXwXMROuo5kKN-Lvi-VJ4', {
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
          alert("Le reÃ§u fiscal est en cours de crÃ©ation et apparaitra d\'ici quelques minutes, pensez Ã  actualiser votre page !");
         
        })
        .catch((error) => {
          console.error('Error:', error);
          alert('Une erreur s\'est produite !');
        });  
    }
    else {
        alert('Vous ne pouvez pas gÃ©nÃ©rer de reÃ§u fiscal, car il y en a dÃ©jÃ  un d\'actif !');
    }
}

  /* 

mainFormRFAnnuelAnnulation = Annulation d'un RF annuel dans le main form 

(Table = PrÃ©lÃ Â¨vement automatique)

*/

function mainFormRFAnnuelAnnulation(formContext) {
    var id = formContext.data.entity.getId();
    id = id.replace(/[{}]/g,"");
    var data = {
      id: id
    };
    var compteurrf = formContext.getAttribute('ekd_compteurrf').getValue();
    if (compteurrf > 1) {
      if (confirm("Voulez-vous annuler le reÃ§u fiscal liÃ© Ã  ce prÃ©lÃ¨vement automatique ?")) {
        alert("Merci de patienter, le reÃ§u fiscal est en cours d\'annulation !");
        fetch('https://prod-44.westeurope.logic.azure.com:443/workflows/54b81497d10e4635ae413b4a04daaf6d/triggers/manual/paths/invoke?api-version=2016-06-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=-lytz-unzrgOqh3mC2_r5oziq50MJjXL0aOHk-BkVNM', {
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
          }
        })
        .then(data => {
          console.log('Success', data);
          alert("Le courrier confirmant l\'annulation du reÃ§u fiscal est en cours de crÃ©ation et apparaÃ®tra d\'ici quelques minutes, pensez Ã   actualiser votre page !");
        })
        .catch(error => {
          console.error('Error:', error);
          alert('Une erreur s\'est produite !');
        });
      } else {
        alert("L\'opÃ©ration a Ã©tÃ© annulÃ©e");
      }
    } else {
      alert("Il n\'y a aucun reÃ§u fiscal Ã  annuler !");
    }
  }
  

  /* 

mainFormEnvoiRF = CrÃ©ation + Envoi (ou envoi simple si RF dÃ©jÃ   existant) d'un RF simpte ou annuel dans le main form 

(Table = Dons + PrÃ©lÃ Â¨vement automatique)

*/

function mainFormEnvoiRF(formContext) {
    var id = formContext.data.entity.getId();
    id = id.replace(/[{}]/g,"");
    var donvalide = formContext.getAttribute('ekd_donvalid').getValue();
    var data = {
        id: id
    };
  
    if (donvalide === true ) {
        if (confirm("Voulez-vous envoyer le reÃ§u fiscal ?")) {
            alert("Merci de patienter, nous envoyons le reÃ§u fiscal !");
            // Envoyer la variable en format JSON
            fetch('https://prod-192.westeurope.logic.azure.com:443/workflows/7d990b2330fe4d64945e491d65c2e7d6/triggers/manual/paths/invoke?api-version=2016-06-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=i6HOh9fQRVFum5C-r-w1wNLBXB9YWbYnY2ohfbt--BE', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            })
            .then(data => {
                console.log('Success :', data);
                alert("Le reÃ§u fiscal a bien Ã©tÃ© envoyÃ© !");
            })
            .catch((error) => {
                console.error('Error:', error);
                alert('Une erreur s\'est produite !');
            });
        } else {
            alert("L\'opÃ©ration a Ã©tÃ© annulÃ©e !");
        }
    } else {
        alert('Le don n\'a pas Ã©tÃ© validÃ© !');
    }
}
  
  
  
  
  

  /* 

mainGridRFCreation = CrÃ©ation d'un RF ou plusieurs RF  dans le main Grid 

(Table = Dons)

*/

function mainGridRFCreation(selectedIds) {
    var flowURL = 'https://prod-178.westeurope.logic.azure.com:443/workflows/c19b119874564826b13d791b3f5aa9f3/triggers/manual/paths/invoke?api-version=2016-06-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=9l1an-Y6DRsnRqX4aMORlLphT4FRbAn2lMHxQk5oMnA';
    if (selectedIds != null && selectedIds != "") {
        var strIds = selectedIds.toString();
        var arrIds = strIds.split(",");
        if (confirm("Voulez-vous vraiment crÃ©er les reÃ§us fiscaux pour ces dons ?")) {
            var successAlertShown = false; // variable pour suivre l'Ã©tat de la condition
            for (var i = 0; i < arrIds.length; i++) {
                var jsonData = JSON.stringify({
                    "id": arrIds[i],
                    "typededocument": "RF"
                });

                parent.$.ajax({
                    url: flowURL,
                    type: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    data: jsonData,
                    success: function (data, status) {
                        if (status === 'success' && !successAlertShown) { // vÃ©rifier si l'alerte a dÃ©jÃ   Ã©tÃ© affichÃ©e
                            alert("Le ou les reÃ§us fiscaux sont en cours de crÃ©ation et apparaÃ®tront d\'ici quelques instants !");
                            successAlertShown = true; // mettre Ã   jour l'Ã©tat de la condition
                        } else if (!successAlertShown) {
                            alert('Une erreur s\'est produite !');
                            successAlertShown = true; // mettre Ã   jour l'Ã©tat de la condition
                        }
                    },
                    error: function (err) {
                        if (!successAlertShown) {
                            alert('Une erreur s\'est produite !');
                            successAlertShown = true; // mettre Ã   jour l'Ã©tat de la condition
                        }
                    }
                });
            }
        } else {
            alert("L\'opÃ©ration est annulÃ©e");
        }
        
    } else {
        alert("Aucun enregistrement n\'a Ã©tÃ© sÃ©lectionnÃ© !");
    }
}




/* 

mainGridRFAnnulation = Annulation d'un RF ou plusieurs RF  dans le main Grid 

(Table = Dons)

*/


function mainGridRFAnnulation(selectedIds) {
    var flowURL =
      "https://prod-76.westeurope.logic.azure.com:443/workflows/8ca4afa817454927b250c7dcca6ab71c/triggers/manual/paths/invoke?api-version=2016-06-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=dznieMB9QoHpC4UVqBbnamOyKSHP7nLMPHd3llhajhI";
      if (selectedIds != null && selectedIds != "") {
        var strIds = selectedIds.toString();
        var arrIds = strIds.split(",");
        if (confirm("Voulez-vous vraiment annuler les reÃ§us fiscaux pour ces dons?")) {
            var successAlertShown = false; // variable pour suivre l'Ã©tat de la condition
            for (var i = 0; i < arrIds.length; i++) {
                var jsonData = JSON.stringify({
                    "id": arrIds[i],
                    "typededocument": "RF"
                });
          parent.$.ajax({
            url: flowURL,
            type: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            data: jsonData,
            success: function (data, status) {
                if (status === 'success' && !successAlertShown) { // vÃ©rifier si l'alerte a dÃ©jÃ   Ã©tÃ© affichÃ©e
                    alert("Le ou les documents d'annulation des reÃ§us fiscaux sont en cours de crÃ©ation et apparaÃ®tront d'ici quelques instants !");
                    successAlertShown = true; // mettre Ã   jour l'Ã©tat de la condition
                } else if (!successAlertShown) {
                    alert('Une erreur s\'est produite !');
                    successAlertShown = true; // mettre Ã   jour l'Ã©tat de la condition
                }
            },
            error: function (err) {
                if (!successAlertShown) {
                    alert('Une erreur s\'est produite !');
                    successAlertShown = true; // mettre Ã   jour l'Ã©tat de la condition
                }
            }
        });
    }
} else {
    alert("L\'opÃ©ration est annulÃ©e");
}

} else {
alert("Aucun enregistrement n\'a Ã©tÃ© sÃ©lectionnÃ© !");
}
}

  


/* 

mainGridCreationRFAnnuel = CrÃ©ation d'un RF ou plusieurs RFs annuels dans le main Grid 

(Table = PrÃ©lÃ Â¨vement automatique)

*/

    function mainGridCreationRFAnnuel(selectedIds) {
        var flowURL = 'https://prod-119.westeurope.logic.azure.com:443/workflows/e4c7685a0a6e4af0a4f3bcc228270227/triggers/manual/paths/invoke?api-version=2016-06-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=9cMf8SzuJsMcT6BELFVPTINXwXMROuo5kKN-Lvi-VJ4';
        if (selectedIds != null && selectedIds != "") {
            var strIds = selectedIds.toString();
            var arrIds = strIds.split(",");
            if (confirm("Voulez-vous vraiment crÃ©er les reÃ§us fiscaux pour ces dons ?")) {
                var successAlertShown = false; // variable pour suivre l'Ã©tat de la condition
                for (var i = 0; i < arrIds.length; i++) {
                    var jsonData = JSON.stringify({
                        "id": arrIds[i],
                        "typededocument": "RF"
                    });
    
                    parent.$.ajax({
                        url: flowURL,
                        type: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        data: jsonData,
                        success: function (data, status) {
                            if (status === 'success' && !successAlertShown) { // vÃ©rifier si l'alerte a dÃ©jÃ   Ã©tÃ© affichÃ©e
                                alert("Le ou les reÃ§us fiscaux sont en cours de crÃ©ation et apparaÃ®tront d'ici quelques instants !");
                                successAlertShown = true; // mettre Ã   jour l'Ã©tat de la condition
                            } else if (!successAlertShown) {
                                alert('Une erreur s\'est produite !');
                                successAlertShown = true; // mettre Ã   jour l'Ã©tat de la condition
                            }
                        },
                        error: function (err) {
                            if (!successAlertShown) {
                                alert('Une erreur s\'est produite !');
                                successAlertShown = true; // mettre Ã   jour l'Ã©tat de la condition
                            }
                        }
                    });
                }
            } else {
                alert("L\'opÃ©ration est annulÃ©e");
            }
            
        } else {
            alert("Aucun enregistrement n\'a Ã©tÃ© sÃ©lectionnÃ© !");
        }
    }

/* 

mainGridRFannulation = Annulation d'un RF ou plusieurs RFs annuels dans le main Grid 

(Table = PrÃ©lÃ¨vement automatique)

*/


function mainGridRFannulationRFAnnuel(selectedIds) {
    var flowURL =
      "https://prod-44.westeurope.logic.azure.com:443/workflows/54b81497d10e4635ae413b4a04daaf6d/triggers/manual/paths/invoke?api-version=2016-06-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=-lytz-unzrgOqh3mC2_r5oziq50MJjXL0aOHk-BkVNM";
      if (selectedIds != null && selectedIds != "") {
        var strIds = selectedIds.toString();
        var arrIds = strIds.split(",");
        if (confirm("Voulez-vous vraiment annuler les reÃ§us fiscaux pour ces dons ?")) {
            var successAlertShown = false; // variable pour suivre l'Ã©tat de la condition
            for (var i = 0; i < arrIds.length; i++) {
                var jsonData = JSON.stringify({
                    "id": arrIds[i],
                    "typededocument": "RF"
                });
          parent.$.ajax({
            url: flowURL,
            type: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            data: jsonData,
            success: function (data, status) {
                if (status === 'success' && !successAlertShown) { // vÃ©rifier si l'alerte a dÃ©jÃ   Ã©tÃ© affichÃ©e
                    alert("Le ou les documents d'annulation des reÃ§us fiscaux sont en cours de crÃ©ation et apparaÃ®tront d\ici quelques instants !");
                    successAlertShown = true; // mettre Ã   jour l'Ã©tat de la condition
                } else if (!successAlertShown) {
                    alert('Une erreur s\'est produite !');
                    successAlertShown = true; // mettre Ã   jour l'Ã©tat de la condition
                }
            },
            error: function (err) {
                if (!successAlertShown) {
                    alert('Une erreur s\'est produite !');
                    successAlertShown = true; // mettre Ã   jour l'Ã©tat de la condition
                }
            }
        });
    }
} else {
    alert("L\'opÃ©ration est annulÃ©e");
}

} else {
alert("Aucun enregistrement n\'a Ã©tÃ© sÃ©lectionnÃ© !");
}
}


/* 

mainGridEnvoiRF = CrÃ©ation + Envoi (Ou envoi simple si RF dÃ©jÃ   existant) d'un ou plusieurs RFs dans le main Grid

(Table = Dons + PrÃ©lÃ Â¨vements automatique)

*/

function mainGridEnvoiRF(selectedIds) {
    var flowURL = 'https://prod-192.westeurope.logic.azure.com:443/workflows/7d990b2330fe4d64945e491d65c2e7d6/triggers/manual/paths/invoke?api-version=2016-06-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=i6HOh9fQRVFum5C-r-w1wNLBXB9YWbYnY2ohfbt--BE';
    if (selectedIds != null && selectedIds != "") {
        var strIds = selectedIds.toString();
        var arrIds = strIds.split(",");
        if (confirm("Voulez-vous vraiment envoyer les reÃ§us fiscaux pour ces dons ?")) {
            var successAlertShown = false; // variable pour suivre l'Ã©tat de la condition
            for (var i = 0; i < arrIds.length; i++) {
                var jsonData = JSON.stringify({
                    "id": arrIds[i],
                    "typededocument": "RF"
                });
          parent.$.ajax({
            url: flowURL,
            type: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            data: jsonData,
            success: function (data, status) {
                if (status === 'success' && !successAlertShown) { // vÃ©rifier si l'alerte a dÃ©jÃ   Ã©tÃ© affichÃ©e
                    alert("Les documents sont tous en cours d\'envoi !");
                    successAlertShown = true; // mettre Ã   jour l'Ã©tat de la condition
                } else if (!successAlertShown) {
                    alert('Une erreur s\'est produite !');
                    successAlertShown = true; // mettre Ã   jour l'Ã©tat de la condition
                }
            },
            error: function (err) {
                if (!successAlertShown) {
                    alert('Une erreur s\'est produite !');
                    successAlertShown = true; // mettre Ã   jour l'Ã©tat de la condition
                }
            }
        });
    }
} else {
    alert("L\'opÃ©ration est annulÃ©e");
}

} else {
alert("Aucun enregistrement n\'a Ã©tÃ© sÃ©lectionnÃ© !");
}
}