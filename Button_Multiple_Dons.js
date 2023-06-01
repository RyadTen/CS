function callMSFlowformultipleselectionsforRF(selectedIds) {
    var flowURL = 'https://prod-91.westeurope.logic.azure.com:443/workflows/12e3a47df3be45b882e946f4b8972409/triggers/manual/paths/invoke?api-version=2016-06-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=gWb73rP3Giv8M-JxloMB9xYBQeb1AB7YF2HxV2RoEgI';
    if (selectedIds != null && selectedIds != "") {
        var strIds = selectedIds.toString();
        var arrIds = strIds.split(",");
        for (var i = 0; i < arrIds.length; i++) {
            var jsonData = JSON.stringify({
                "donID": arrIds[i],
                "typededocument": "RF"
            });

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
                        //alert('Le document a bien ÃƒÂ©tÃƒÂ© gÃƒÂ©nÃƒÂ©rÃƒÂ© !');
                    } else {
                        alert('Une erreur s\'est produite !');
                    }
                },
                error: function (err) {
                    alert('Une erreur s\'est produite !');
                }
            });

        }
        alert('Le ou les documents sont en cours de crÃƒÂ©ation !');

    }
    else {
        alert("Aucun enregistrement n\'a ÃƒÂ©tÃƒÂ© sÃƒÂ©lectionnÃƒÂ© !");
    }
}
function callMSFlowformultipleselectionsforRFannulation(selectedIds) {
    var flowURL = 'https://prod-91.westeurope.logic.azure.com:443/workflows/12e3a47df3be45b882e946f4b8972409/triggers/manual/paths/invoke?api-version=2016-06-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=gWb73rP3Giv8M-JxloMB9xYBQeb1AB7YF2HxV2RoEgI';
    if (selectedIds != null && selectedIds != "") {
        var strIds = selectedIds.toString();
        var arrIds = strIds.split(",");
        confirm("ÃƒÅ tes-vous sÃƒÂ»r de vouloir annuler ces dons?");
        for (var i = 0; i < arrIds.length; i++) {
            var jsonData = JSON.stringify({
                "donID": arrIds[i],
                "typededocument": "RFannulation"
            });

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
                        //alert('Le document a bien ÃƒÂ©tÃƒÂ© gÃƒÂ©nÃƒÂ©rÃƒÂ© !');
                    } else {
                        alert('Une erreur s\'est produite !');
                    }
                },
                error: function (err) {
                    alert('Une erreur s\'est produite !');
                }
            })
        }
        alert('Le ou les documents sont en cours de crÃƒÂ©ation !');

    }
    else {
        alert("Aucun enregistrement n\'a ÃƒÂ©tÃƒÂ© sÃƒÂ©lectionnÃƒÂ© !");
    }
}

function callMSFlowforDREVCRTAMultiple(selectedIds) {
    var flowURL = 'https://prod-06.westeurope.logic.azure.com:443/workflows/c59eb8bb2e004bd3ac0c8d0c11991cfd/triggers/manual/paths/invoke?api-version=2016-06-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=1JSk76NubPVdmYlYpmUzG4PsMZznG6WOPHN9okNyZ84';
    if (selectedIds != null && selectedIds != "") {
        var strIds = selectedIds.toString();
        var arrIds = strIds.split(",");
        for (var i = 0; i < arrIds.length; i++) {
            var jsonData = JSON.stringify({
                "CRTAID": arrIds[i],
                "typededocument": "DREVCRTA"
            });

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
                        //alert('Le document a bien ÃƒÂ©tÃƒÂ© gÃƒÂ©nÃƒÂ©rÃƒÂ© !');
                    } else {
                        alert('Une erreur s\'est produite !');
                    }
                },
                error: function (err) {
                    alert('Une erreur s\'est produite !');
                }
            });

        }
        alert('Le ou les documents sont en cours de crÃƒÂ©ation !');

    }
    else {
        alert("Aucun enregistrement n\'a ÃƒÂ©tÃƒÂ© sÃƒÂ©lectionnÃƒÂ© !");
    }
}
function callMSFlowforMultipleSelectionTA(selectedIds) {
    var flowURL = 'https://prod-174.westeurope.logic.azure.com:443/workflows/936196cfbefe4079a2825cda687cdb28/triggers/manual/paths/invoke?api-version=2016-06-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=OAqvAUfWNu_gbNuLmm3Fl3Q_R_2HlRhm38uzqmznKJ8';
    if (selectedIds != null && selectedIds != "") {
        var strIds = selectedIds.toString();
        var arrIds = strIds.split(",");
        for (var i = 0; i < arrIds.length; i++) {
            var jsonData = JSON.stringify({
                "ProspectionTaId": arrIds[i],
                "typededocument": "CreateProspectionTA"
            });

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

                },
                error: function (err) {
                    alert('Une erreur s\'est produite ! Soit la prospection a dÃƒÂ©jÃƒ  ÃƒÂ©tÃƒÂ© gÃƒÂ©nÃƒÂ©rÃƒÂ©e pour cette entreprise, soit le taxeur ou le joker n\'est pas renseignÃƒÂ© !');
                }
            });

        }
        alert('Les Prospections TA sont en cours de crÃƒÂ©ation !');

    }
    else {
        alert("Aucun enregistrement n\'a ÃƒÂ©tÃƒÂ© sÃƒÂ©lectionnÃƒÂ© !");
    }
}

function callMSFlowformultipleselectionsforRFannuel(selectedIds) {
    var flowURL = 'https://prod-144.westeurope.logic.azure.com:443/workflows/92cb36204c764593af2827602e8ad0d8/triggers/manual/paths/invoke?api-version=2016-06-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=Bbto1cIbVT_TUZGzHwEDh0ch_Ztq6DYiVsQ4HZLitLs';
    if (selectedIds && selectedIds !== "") {
        var strIds = selectedIds.toString();
        var arrIds = strIds.split(",");
        for (var i = 0; i < arrIds.length; i++) {
            var jsonData = JSON.stringify({
                "id": arrIds[i],
                "typededocument": "RF"
            });
            alert(jsonData);
            if (confirm("Voulez-vous vraiment générer les reçus fiscaux pour les prélèvements automatiques sélectionnés ?")) {
                alert("Le document est en cours de création et apparaîtra d'ici quelques minutes. Pensez à actualiser votre don pour faire apparaître le reçu fiscal.");
                fetch(flowURL, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: jsonData
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
                    alert("Le document a été créé avec succès et apparaîtra d'ici quelques minutes. Pensez à actualiser votre don pour faire apparaître le reçu fiscal.");
                })
                .catch(error => {
                    console.error('Error:', error);
                    alert("Une erreur s'est produite lors de la génération des reçus fiscaux !");
                });
            } else {
                alert("Annulation de l'opération.");
            }
        }
    } else {
        alert("Le don n'a pas été validé, ou il n'y a aucun reçu fiscal à annuler !");
    }
}




    
              /*  parent.$.ajax({
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
                            //alert('Le document a bien ÃƒÂ©tÃƒÂ© gÃƒÂ©nÃƒÂ©rÃƒÂ© !');
                        } else {
                            alert('Une erreur s\'est produite !');
                        }
                    },
                    error: function (err) {
                        alert('Une erreur s\'est produite !');
                    }
                });
        }
        

        }
        alert('Le ou les documents sont en cours de crÃ©ation !');

    }
    else {
        alert("Aucun enregistrement n\'a Ã©tÃ© selectionnÃ© !");
    }
}*/



function callMSFlowformultipleselectionsforRFannulationannuel(selectedIds) {
    var flowURL = 'https://prod-144.westeurope.logic.azure.com:443/workflows/92cb36204c764593af2827602e8ad0d8/triggers/manual/paths/invoke?api-version=2016-06-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=Bbto1cIbVT_TUZGzHwEDh0ch_Ztq6DYiVsQ4HZLitLs';
    if (selectedIds != null && selectedIds != "") {
        var strIds = selectedIds.toString();
        var arrIds = strIds.split(",");
        confirm("ÃƒÅ tes-vous sÃƒÂ»r de vouloir annuler ces dons?");
        for (var i = 0; i < arrIds.length; i++) {
            var jsonData = JSON.stringify({
                "donID": arrIds[i],
                "typededocument": "RFannulation"
            });

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
                        //alert('Le document a bien ÃƒÂ©tÃƒÂ© gÃƒÂ©nÃƒÂ©rÃƒÂ© !');
                    } else {
                        alert('Une erreur s\'est produite !');
                    }
                },
                error: function (err) {
                    alert('Une erreur s\'est produite !');
                }
            })
        }
        alert('Le ou les documents sont en cours de crÃƒÂ©ation !');

    }
    else {
        alert("Aucun enregistrement n\'a ÃƒÂ©tÃƒÂ© sÃƒÂ©lectionnÃƒÂ© !");
    }
}

function callMSFlowformultipleduplicates(selectedIds) {
    var flowURL = 'https://prod-196.westeurope.logic.azure.com:443/workflows/8aea53c2cd0a42a194458872f54454a0/triggers/manual/paths/invoke?api-version=2016-06-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=Fc0rHL-xy0_dlJ7ADuE4qy_xkIrOoZEkUCHlHA_Jt4k';
    if (selectedIds != null && selectedIds != "") {
        var strIds = selectedIds.toString();
        var arrIds = strIds.split(",");
        var demandeCreeePar = Xrm.Page.context.getUserId();

        var jsonData = JSON.stringify({
            "Duplicates": arrIds,
            "typededocument": "Duplicate",
            "demandeCreeePar": demandeCreeePar
        });

        alert('Votre demande a bien ÃƒÂ©tÃƒÂ© prise en compte !');

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

            },
            error: function (err) {
                alert('Une erreur s\'est produite !');
            }
        });


    }
    else {
        alert("Aucun enregistrement n\'a ÃƒÂ©tÃƒÂ© sÃƒÂ©lectionnÃƒÂ© !");
    }
}

function callMSFlowformultipleselectionsforEnvoyerRF(selectedIds) {
    var flowURL = 'https://prod-192.westeurope.logic.azure.com:443/workflows/829e62cdc2a04a5e84d6fcf652d19521/triggers/manual/paths/invoke?api-version=2016-06-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=kigjeU5hr9jlwmdfxRh5Fe7rTfNl5osKApEuyTLU7yA';
    if (selectedIds != null && selectedIds != "") {
        var strIds = selectedIds.toString();
        var arrIds = strIds.split(",");

        var jsonData = JSON.stringify({
            "donID": arrIds,
            "typededocument": "EnvoiRF",
        });

        alert('La demande d\'envoi a bien ÃƒÂ©tÃƒÂ© prise en compte!');

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

            },
            error: function (err) {
                alert('Une erreur s\'est produite !');
            }
        });


    }
    else {
        alert("Aucun enregistrement n\'a ÃƒÂ©tÃƒÂ© sÃƒÂ©lectionnÃƒÂ© !");
    }
}

function MultiSelectionCourrierTAEntreprise(selectedIds) {
    var flowURL = 'https://prod-199.westeurope.logic.azure.com:443/workflows/6381ff9314ed43069df37118a66ba4bd/triggers/manual/paths/invoke?api-version=2016-06-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=fdpggGsYKjuVgJWfr-X7MOjEKPraKVFesg-ONCs8Vpk';
    if (selectedIds != null && selectedIds != "") {
        var strIds = selectedIds.toString();
        var arrIds = strIds.split(",");
        var userSettings = Xrm.Utility.getGlobalContext().userSettings;
        var currentuserid = userSettings.userId;

        var jsonData = JSON.stringify({
            "donID": arrIds,
            "typededocument": "CourrierTAEntreprise",
            "UserID": currentuserid,
        });

        alert('La demande d\'envoi a bien ÃƒÂ©tÃƒÂ© prise en compte!');

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

            },
            error: function (err) {
                alert('Une erreur s\'est produite !');
            }
        });


    }
    else {
        alert("Aucun enregistrement n\'a ÃƒÂ©tÃƒÂ© sÃƒÂ©lectionnÃƒÂ© !");
    }
}
function MultiSelectionCourrierTAGroupe(selectedIds) {
    var flowURL = 'https://prod-199.westeurope.logic.azure.com:443/workflows/6381ff9314ed43069df37118a66ba4bd/triggers/manual/paths/invoke?api-version=2016-06-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=fdpggGsYKjuVgJWfr-X7MOjEKPraKVFesg-ONCs8Vpk';
    if (selectedIds != null && selectedIds != "") {
        var strIds = selectedIds.toString();
        var arrIds = strIds.split(",");
        var userSettings = Xrm.Utility.getGlobalContext().userSettings;
        var currentuserid = userSettings.userId;


        var jsonData = JSON.stringify({
            "donID": arrIds,
            "typededocument": "CourrierTAGroupe",
            "UserID": currentuserid,
        });

        alert('La demande d\'envoi a bien ÃƒÂ©tÃƒÂ© prise en compte!');

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

            },
            error: function (err) {
                alert('Une erreur s\'est produite !');
            }
        });


    }
    else {
        alert("Aucun enregistrement n\'a ÃƒÂ©tÃƒÂ© sÃƒÂ©lectionnÃƒÂ© !");
    }
}