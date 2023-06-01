function VisibilityMontantContractuel(executionContext) {
	var formContext = executionContext.getFormContext();
    var dateSignature = formContext.getAttribute("ekd_datedesignature").getValue();
    var today = new Date()

    if (dateSignature != null && dateSignature >= today) {
        formContext.getControl("ekd_recettescontractuelles").setVisible(true);
    }
    else {
        formContext.getControl("ekd_recettescontractuelles").setVisible(false);
    }
} 


function Commentaire(executionContext) {
	var formContext = executionContext.getFormContext();
    var planStrat = formContext.getAttribute("ekd_planstrategiquev2").getValue();

    if (planStrat === "962820000" || planStrat >= "962820000" ) {
        formContext.getControl("ekd_commentaire").setVisible(true);
    }
    else {
        formContext.getControl("ekd_commentaire").setVisible(false);
    }
} 