const element = document.getElementsByName("condition");

function runTie() {
    for (var i = 0; i < element.length; i++) {
        new Def.Autocompleter.Search(`condition${i}`,
            'https://clinicaltables.nlm.nih.gov/api/conditions/v3/search');
    }
}
runTie()
