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
    		    	{word : 'Gov1'},
    		    	{word : 'Gov2'},
    		    	{word : 'Gov3'},
    		    	{word : 'Gov4'},
    		    	{word : 'Gov5'},
    		    	{word : 'Gov6'},
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
				{word: 'Neg1'},
				{word: 'Neg2'},
				{word: 'Neg3'},
				{word: 'Neg4'},
				{word: 'Neg5'},
				{word: 'Neg6'}
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
				{word: 'Pos1'},
				{word: 'Pos2'},
				{word: 'Pos3'},
				{word: 'Pos4'},
				{word: 'Pos5'},
				{word: 'Pos6'}
			],
			//Can change color and size of the targets here.
			css : {color:'#31b404','font-size':'3em'}
			},

  base_url : {//Where are your images at?
    image : 'https://baranan.github.io/minno-tasks/images/'
  }}
  );
  });
