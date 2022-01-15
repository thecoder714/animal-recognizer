function startDetection() {
    navigator.getUserMedia({audio: true});
    ml5.soundClassifier('#/model.json', compare());
}

function compare() {
    classifier.classify(resultsAnalyzer);
    resultsAnalyzer();
}

function resultsAnalyzer(err, results) {
    if (err) {
        console.error(err);
    } else {
        document.querySelector('#results').innerHTML = undefined;
    }
}
