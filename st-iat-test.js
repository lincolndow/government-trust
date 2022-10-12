define(['pipAPI', 'https://cdn.jsdelivr.net/gh/baranan/minno-tasks@0.*/stiat/qualtrics/qstiat6.js'], function(APIConstructor, stiatExtension){

	var API = new APIConstructor();
		  return stiatExtension({
		  category : {
		    name : 'Government', //Will appear in the data.
		    title : {
		      media : {word : 'Government'}, //Name of the category presented in the task.
		      css : {color:'#31b404','font-size':'2em'}, //Style of the category title.
		      height : 7 //Used to position the "Or" in the combined block.
		    },
		    media : [ //Stimuli content as PIP's media objects
    		    	{image : 'black1.jpg'},
    			{image : 'black2.jpg'},
    			{image : 'black3.jpg'},
    			{image : 'black4.jpg'},
    			{image : 'black5.jpg'},
    			{image : 'black6.jpg'}
		    ],
		    //Stimulus css (style)
		    css : {color:'#31b404','font-size':'3em'}
		  },

  		attribute1 :
			{
			name : 'Untrustworthy', //Attribute label
			title : {
				media : {word : 'Untrustworthy'}, //Name of the category presented in the task.
				css : {color:'#31b404','font-size':'2em'}, //Style of the category title.
				height : 7 //Used to position the "Or" in the combined block.
			},
			media : [ //Stimuli
				{word: 'Bomb'},
				{word: 'Abuse'},
				{word: 'Sadness'},
				{word: 'Pain'},
				{word: 'Poison'},
				{word: 'Grief'}
			],
			//Can change color and size of the targets here.
			css : {color:'#31b404','font-size':'3em'}
			},
		attribute2 :
			{
			name : 'Trustworthy', //Attribute label
			title : {
				media : {word : 'Trustworthy'}, //Name of the category presented in the task.
				css : {color:'#31b404','font-size':'2em'}, //Style of the category title.
				height : 7 //Used to position the "Or" in the combined block.
			},
			media : [ //Stimuli
				{word: 'Paradise'},
				{word: 'Pleasure'},
				{word: 'Cheer'},
				{word: 'Wonderful'},
				{word: 'Splendid'},
				{word: 'Love'}
			],
			//Can change color and size of the targets here.
			css : {color:'#31b404','font-size':'3em'}
			},

  base_url : {//Where are your images at?
    image : 'https://baranan.github.io/minno-tasks/images/'
  }}
  );
  });
