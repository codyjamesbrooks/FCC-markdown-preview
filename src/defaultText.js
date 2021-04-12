// Default text that loads into textarea.
const defaultText = `
# Check out this Markdown Previewer
## Now check out this sub-title
### But is a sub-sub-title possible?
#### It is... but wait there is more!

This next bit is subtle. But check this out. 

---

How is this whole thing possible? Let me tell you while (while showing you some more features)

1. So what we are doing is taking text, that has some very simple syntax rules.

3. Then we pass that text through a javaScript function, that parses the text and looks for the specific syntax rules. 

2. Then that javaScript function spits out some wonderfully formatted, presentational quality, text. 

---

Pretty cool huh? Did you catch that I didn't even count out the steps on those instructions correctly. It didn't even matter. Even people who are unable to count can now make numbered lists!

---

Here is a link to the documentation for the javaScript function that this page is using [Marked]. Please note the hyperlink, The **COOL** features never stop. 

---

But what about code? What if I need to embed code into my document?

Well I can do something like this \`\`\`<div>This is an inline block</div>\`\`\` 

Or I can create a multiline indented code block like the one below

\`\`\`

    function myFunction() {
        console.log("Don't worry it's possible")
        confirm("Is this cool") ? 
        alert("I totally agree") : 
        alert("You are wrong")
    }

\`\`\`

In order to show you another feature I will use this wonderful quote. 

> "Would I rather be feared or loved? Easy. Both. I want people to be afraid of how much they love me." - Michael Scott

---

Thanks for reading! Feel free to edit anything inside this textbox in order to play/learn markdown syntax. 

![thats all folks](/https://i.pinimg.com/236x/f8/cd/b6/f8cdb6d8251d5aec92b6feff60afe21e--fort-bragg-no-regrets.jpg "That's all folks")

[Marked]:https://marked.js.org/
`;

export default defaultText;
