monogatari.component ('studio').template (() => {
	return `
		<h1>Monogatari studio</h1>
		<div data-content="visuals">
			tabs:<ol>
                <li>Game Options</li>
                <li>Characters</li>
                <li>Assets [scene,image,music,voice etc]</li>
                <li>plot</li>
                <li>keyboard shortcuts</li>
            </ol>
		</div>
	`;
});

//appending required scripts dependency
[
    'https://code.jquery.com/jquery-latest.min.js',
    'https://cdnjs.cloudflare.com/ajax/libs/jqueryui/1.12.1/jquery-ui.min.js'
].map((src)=>{
    var script = document.createElement('script');
    script.src = src;
    script.type = 'text/javascript';
    document.getElementsByTagName('head')[0].appendChild(script);
})
