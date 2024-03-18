describe('Practical task', () => {

    it('title matches-01', async () => {
        await browser.url('https://pastebin.com/kDk9wqTF');
        const pageTitle = await browser.getTitle();
        expect(pageTitle).toEqual("how to gain dominance among developers - Pastebin.com");

    })

    it('suspended for bash-02', async () => {
        await browser.url('https://pastebin.com/kDk9wqTF');
        const textBut = await $("a.btn.-small.h_800").getText();
        expect(textBut).toEqual("Bash");
    })

    it('code matches-03', async () => {
        await browser.url('https://pastebin.com/kDk9wqTF');
        const text = await $("body > div.wrap > div.container > div.content > div.post-view.js-post-view > div.highlighted-code > div.source.bash").getText();
        expect(text).toEqual('git config --global user.name "New Sheriff in Town"\ngit reset $ (git commit-tree HEAD ^ {tree} -m "Legacy code")\ngit push origin master --force\n ');
    })
})
