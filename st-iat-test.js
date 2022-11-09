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
    		    	{word : 'Government'},
    		    	{word : 'U.S. Government'},
    		    	{word : 'Federal'},

		    ],
		    //Stimulus css (style)
		    css : {color:'#000000','font-size':'3em'}
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
				{word: 'Immoral'},
				{word: 'Inexperienced'},
				{word: 'Incapable'},
				{word: 'Untrustworthy'},
				{word: 'Unreliable'},
				{word: 'Undependable'},
				{word: 'Dishonest'}
			],
			//Can change color and size of the targets here.
			css : {color:'#000000','font-size':'3em'}
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
				{word: 'Moral'},
				{word: 'Experienced'},
				{word: 'Capable'},
				{word: 'Trustworthy'},
				{word: 'Reliable'},
				{word: 'Dependable'},
				{word: 'Honest'}
			],
			//Can change color and size of the targets here.
			css : {color:'#000000','font-size':'3em'}
			},

  base_url : {//Where are your images at?
    image : 'https://baranan.github.io/minno-tasks/images/'
  }}
  );
  });
