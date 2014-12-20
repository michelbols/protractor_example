
describe ('google translate test with page objects', function() {
    var translatePage = require('../page/google.translate.page.js');

    beforeEach(function() {
        browser.ignoreSynchronization = true; // page is not angular...
        browser.manage().timeouts().implicitlyWait(2000);
    });

    it('should translate Spanish to English', function() {
        // given at the translate page...
        translatePage.goto();

        // when selection norwegian...
        translatePage.selectSourceLanguage('Spanish');

        // when entering Norwegian word...
        translatePage.enterSourceText('queso');

        // then word is translated to english...
        expect(translatePage.resultText()).toBe('cheese');
    });
});
