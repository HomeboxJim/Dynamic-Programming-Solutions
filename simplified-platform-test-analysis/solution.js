
/*    Given these three types of tests (navigatingToPages, clickingButtons, and playingVideo)
       and a list of metadata objects (each corresponding to a functional test for HBO Go),
       write a function or functions that answer the follow questions: 
    
       - Do we have full coverage? 
         (ie. Does a passing test exist for each of the three test types for all designs)
      
       - If not, what's missing?  
     
       - Do we have any overlapping tests? 
         (ie. Is any of the three tests being checked for a design more than once?)  
         
         
         Notes: design 'all' means all designs.
                design 'univ' means desktop, android, and ios.
                design 'mobile' means android and ios.
*/


/*
      Answer: Yes there is full coverage, but there is an overlap for playingVideo with design ios.

*/

function crawl() {
  
  
  var tests = ["navigatingToPages",
               "clickingButtons",
               "playingVideo"];
 
  var metaDatas = [{name: "navigatingToPages",   design: "ps4"},
                 {name: "playingVideo",     design: "ios"},
                 {name: "navigatingToPages",   design: "tv"},
                 {name: "navigatingToPages",   design: "desktop"},
                 {name: "playingVideo",        design: "desktop"},
                 {name: "clickingButtons",     design: 'roku,tv'},
                 {name: "navigatingToPages",   design: "ios"},
                 {name: "navigatingToPages",   design: "roku"},
                 {name: "playingVideo",        design: "ps4, tv, roku"},
                 {name: "navigatingToPages",   design: "android"},
                 {name: "playingVideo",        design: "mobile"},
                 {name: "playingVideo",        design: ""},
                 {name: "clickingButtons",     design: "univ"},
                 {name: "clickingButtons",     design: "ps4", derp: "james"}];
  
  
  //==============================
  
  
  var tvArray = [];
  var rokuArray = [];
  var ps4Array = [];
  var iosArray = [];
  var androidArray = [];
  var desktopArray = [];

  var designArrays = [tvArray, rokuArray, ps4Array, iosArray, androidArray, desktopArray];
  
  var fullCoverageFlag = true;
  var missingTests = [];
  
  
  var tvOccurrenceMap = {"navigatingToPages":0,"clickingButtons":0,"playingVideo":0};
  var rokuOccurrenceMap = {"navigatingToPages":0,"clickingButtons":0,"playingVideo":0};
  var ps4OccurrenceMap = {"navigatingToPages":0,"clickingButtons":0,"playingVideo":0};
  var iosOccurrenceMap = {"navigatingToPages":0,"clickingButtons":0,"playingVideo":0};
  var androidOccurrenceMap = {"navigatingToPages":0,"clickingButtons":0,"playingVideo":0};
  var desktopOccurrenceMap = {"navigatingToPages":0,"clickingButtons":0,"playingVideo":0}; 
  
  tvOccurrenceMap.name = 'tv';
  rokuOccurrenceMap.name = 'roku';
  ps4OccurrenceMap.name = 'ps4';
  tvOccurrenceMap.name = 'tv';
  iosOccurrenceMap.name = 'ios';
  androidOccurrenceMap.name = 'android';
  desktopOccurrenceMap.name = 'desktop';
  
  var occurrenceMaps = [tvOccurrenceMap, rokuOccurrenceMap, ps4OccurrenceMap, 
                        iosOccurrenceMap, androidOccurrenceMap, desktopOccurrenceMap];
  
  
  // First, populate the array for each design with tests for it.
  for (var i = 0; i < metaDatas.length; i++) {
    filterIntoDeviceBuckets(i);
  };
  
  
  // Next, populate the occurrence maps.
   checkOccurrences(tvArray, tvOccurrenceMap);
   checkOccurrences(rokuArray, rokuOccurrenceMap);
   checkOccurrences(ps4Array, ps4OccurrenceMap);
   checkOccurrences(iosArray, iosOccurrenceMap);
   checkOccurrences(androidArray, androidOccurrenceMap);
   checkOccurrences(desktopArray, desktopOccurrenceMap); 
  
  
   checkForTotalFullCoverage();
  
   checkForTotalDuplicates();
  
  
  function checkOccurrences(designArray, occurrenceMap) {
    for (var i = 0; i < designArray.length; i++) {  
      occurrenceMap[designArray[i].name]++;
    };
  }
  
  
  function checkForTotalFullCoverage () {
    
    if (checkForFullCoverage(tvOccurrenceMap, 'tv') &&
        checkForFullCoverage(rokuOccurrenceMap, 'roku') &&
        checkForFullCoverage(ps4OccurrenceMap, 'ps4') &&
        checkForFullCoverage(iosOccurrenceMap, 'ios') &&
        checkForFullCoverage(androidOccurrenceMap, 'android') &&
        checkForFullCoverage(desktopOccurrenceMap, 'desktop')) {
     
      console.log('Yes, we have full coverage!'); 
    
    }
  }
  
  function checkForFullCoverage (occurrenceMap, design) {
    for (var b in occurrenceMap) {
      if (occurrenceMap[b] === 0) {
       fullCoverageFlag = false;
       missingTests.push({'name':b, 'design':design}); 
    
       console.log('Missing test for: ' + b + ' on ' + design);
      }
    }
    
    return fullCoverageFlag;
    
  }
  
  
  function filterIntoDeviceBuckets (i) {
  
    
    if (metaDatas[i].design.indexOf('tv') != -1) {
         tvArray.push(metaDatas[i]);
      }
    
    if (metaDatas[i].design.indexOf('ps4') != -1) {
         ps4Array.push(metaDatas[i]);
      }

    if (metaDatas[i].design.indexOf('roku') != -1) {
         rokuArray.push(metaDatas[i]);
      }    
                       
    if (metaDatas[i].design.indexOf('ios') != -1) {
         iosArray.push(metaDatas[i]);
      }
                       
    if (metaDatas[i].design.indexOf('android') != -1) {
         androidArray.push(metaDatas[i]);
      }  
                                      
    if (metaDatas[i].design.indexOf('desktop') != -1) {
        desktopArray.push(metaDatas[i]);
      }            
    
    
    // Handle special cases
    if (metaDatas[i].design.indexOf('all') != -1) {
       tvArray.push(metaDatas[i]);
       ps4Array.push(metaDatas[i]);
       rokuArray.push(metaDatas[i]);
       iosArray.push(metaDatas[i]);
       androidArray.push(metaDatas[i]);
       desktopArray.push(metaDatas[i]);
    }
    
    if (metaDatas[i].design.indexOf('mobile') != -1) {
      
       iosArray.push(metaDatas[i]);
       androidArray.push(metaDatas[i]);
    }
    
    if (metaDatas[i].design.indexOf('univ') != -1) {
       iosArray.push(metaDatas[i]);
       androidArray.push(metaDatas[i]);
       desktopArray.push(metaDatas[i]);
    }
    

};
  
  
  function checkForTotalDuplicates () {
    
    var duplicateExists = false;
    
    for (var i=0; i < occurrenceMaps.length; i++) {
      for (var b in occurrenceMaps[i]) {
        
        if (occurrenceMaps[i][b] > 1) {
          console.log('Duplicates exist! ' + b + ' for ' + occurrenceMaps[i].name + ' occurred ' + occurrenceMaps[i][b] + ' times.');
          duplicateExists = true;
        }
      }
    
    }
    
    if (!duplicateExists) {
     console.log('There are no duplicates!'); 
    }
    
    
  }
  
}



crawl();





