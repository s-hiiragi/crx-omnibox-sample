/*
 * chrome.omnibox.setDefaultSuggestion
 * 
 * default value (pseudo-representation):
 *     `${text}<dim> - ${manifest.name}</dim>`
 */
chrome.omnibox.setDefaultSuggestion({
    "description": "A description can be decorated by xml tags. (url: <url>http://example.com</url>, match: <match>match</match>, dim: <dim>dim</dim>)"
});

/*
 * chrome.omnibox.onInputStarted
 */
chrome.omnibox.onInputStarted.addListener(() => {
    if (chrome.runtime.lastError) {
        throw new Error(chrome.runtime.lastError);
    }
    console.log('onInputStarted:');
});

/*
 * chrome.omnibox.onInputChanged
 */
chrome.omnibox.onInputChanged.addListener((text, suggest) => {
    if (chrome.runtime.lastError) {
        throw new Error(chrome.runtime.lastError);
    }
    console.log(`onInputChanged: text=${text}`);

    let res = [];
    for (let i = 1; i <= 3; i++) {
        res.push({
            content: text + i,
            description: `<match>${text}</match>${i}<dim> - ${i + [,"st","nd","rd"][i]} suggestion</dim>`,
            deletable: true
        });
    }
    suggest(res);
});

/*
 * chrome.omnibox.onInputEntered
 */
chrome.omnibox.onInputEntered.addListener((text, disposition) => {
    if (chrome.runtime.lastError) {
        throw new Error(chrome.runtime.lastError);
    }
    console.log(`onInputEntered: text=${text}, disposition=${disposition}`);
});

/*
 * chrome.omnibox.onInputCancelled
 */
chrome.omnibox.onInputCancelled.addListener(() => {
    if (chrome.runtime.lastError) {
        throw new Error(chrome.runtime.lastError);
    }
    console.log("onInputCancelled:");
});

/*
 * chrome.omnibox.onDeleteSuggestion
 * 
 * I do not know when it will be called.
 */
chrome.omnibox.onDeleteSuggestion.addListener((text) => {
    if (chrome.runtime.lastError) {
        throw new Error(chrome.runtime.lastError);
    }
    console.log(`onDeleteSuggestion: text=${text}`);
});
