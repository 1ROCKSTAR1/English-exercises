topic = "Prepositions with adjectives.";
grammar = "Afraid/frightened/terrified/scared OF<br>";
grammar+= "Fond/proud/ashamed/jealous/envious OF<br>";
grammar+= "Suspicious/critical/(in)tolerant OF<br>";
grammar+= "Aware/conscious OF<br>";
grammar+= "Capable/incapable OF<br>";
grammar+= "Full/Short OF<br>";
grammar+= "Typical/Tired OF<br>";
grammar+= "Certain/sure OF/ABOUT<br>";
grammar+= "Good/bad/excellent/hopeless/etc AT<br>";
grammar+= "Married/engaged TO<br>";
grammar+= "Similar TO, but different FROM/TO<br>";
grammar+= "Interested IN, keen ON<br>";
grammar+= "Dependent ON, but independent OF<br>";
grammar+= "Crowded WITH<br>";
grammar+= "Famous/well known FOR, responsible FOR<br>";

cards = [
 {"question":"I am %arg1 ... %arg2",
  "answer": "of",
  "radios": ["of", "with", "by", "to"],
  "arg1": ["afraid", "frightened", "terrified", "scared"],
  "arg2": ["spiders", "heights", "fire"],
 },
 {"question":"I am %arg1 ... %arg2",
  "answer": "of",
  "radios": ["of", "with", "by", "to"],
  "arg1": ["fond", "proud", "ashamed"],
  "arg2": ["my game", "my article"],
 },
 {"question":"I am %arg1 ... %arg2",
  "answer": "of",
  "radios": ["of", "with", "by", "to", "at"],
  "arg1": ["jelaous", "envious"],
  "arg2": ["other people success"],
 },
 {"question":"I am %arg1 ... %arg2",
  "answer": "of",
  "radios": ["of", "with", "by", "to", "at"],
  "arg1": ["suspicious", "critical", "tolerant", "intolerant"],
  "arg2": ["anything new"],
 },
 {"question":"I am %arg1 ... %arg2",
  "answer": "of",
  "radios": ["of", "with", "by", "to", "at"],
  "arg1": ["aware", "conscious"],
  "arg2": ["the vulnerability"],
 },
 {"question":"I am %arg1 ... %arg2",
  "answer": "of",
  "radios": ["of", "with", "by", "to", "at"],
  "arg1": ["capable", "incapable"],
  "arg2": ["killing a person"],
 },
 {"question":"The shop is %arg1 ... %arg2",
  "answer": "of",
  "radios": ["of", "with", "by", "to", "at"],
  "arg1": ["full", "short"],
  "arg2": ["goods", "merchandise"],
 },
 {"question":"I am tired ... %arg1",
  "answer": "of",
  "radios": ["of", "with", "by", "to", "at"],
  "arg1": ["her being late"],
 },
 {"question":"It's typical ... me not doing my homework",
  "answer": "of",
  "radios": ["of", "with", "by", "to", "at"],
 },
 {"question":"I am %arg1 ... %arg2",
  "answer": "of",
  "radios": ["of", "with", "by", "to", "at"],
  "arg1": ["certain", "sure"],
  "arg2": ["that fact", "I could do that"],
 },
 {"question":"I am %arg1 ... %arg2",
  "answer": "at",
  "radios": ["of", "with", "by", "to", "at"],
  "arg1": ["good", "bad", "excellent", "brilliant", "hopeless"],
  "arg2": ["English grammar", "writing", "storytelling", "public speechs"],
 },
 {"question":"I have never been %arg1 ... a woman",
  "answer": "to",
  "radios": ["of", "with", "by", "to", "at"],
  "arg1": ["married", "engaged"],
 },
 {"question":"You have a bike similar ... mine",
  "answer": "to",
  "radios": ["of", "with", "by", "to", "at"],
 },
 {"question":"You have a bike different ... mine",
  "answer": ["to", "from"],
  "radios": ["of", "with", "from", "to", "at"],
 },
 {"question":"I am keen ... gamedev",
  "answer": "on",
  "radios": ["of", "with", "on", "to", "in"],
 },
 {"question":"I am interested ... gamedev",
  "answer": "in",
  "radios": ["of", "with", "on", "to", "in"],
 },
 {"question":"I dependent ... salary",
  "answer": "on",
  "radios": ["of", "with", "on", "to", "in"],
 },
 {"question":"I independent ... anybody's opinion",
  "answer": "of",
  "radios": ["of", "with", "on", "to", "in"],
 },
 {"question":"The bar was crowded ... people",
  "answer": "with",
  "radios": ["of", "with", "by"],
 },
 {"question":"I am %arg1 ... %arg2",
  "answer": "for",
  "radios": ["of", "with", "by", "for"],
  "arg1": ["well known", "famous", "responsible"],
  "arg2": ["the game about Teutons", "article about Ekb"],
 },
]

include("js/engine.js",function(){
  //
});
