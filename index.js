var sheetName = 'Sheet1'
var scriptProp = PropertiesService.getScriptProperties()

function intialSetup () {
  var activeSpreadsheet = SpreadsheetApp.getActiveSpreadsheet()
    scriptProp.setProperty('key', activeSpreadsheet.getId())
    }

    function doPost (e) {
      var lock = LockService.getScriptLock()
        lock.tryLock(10000)

          try {
              var doc = SpreadsheetApp.openById(scriptProp.getProperty('key'))
                  var sheet = doc.getSheetByName(sheetName)

                      var headers = sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues()[0]
                          var nextRow = sheet.getLastRow() + 1

                              var newRow = headers.map(function(header) {
                                    return header === 'timestamp' ? new Date() : e.parameter[header]
                                        })

                                            sheet.getRange(nextRow, 1, 1, newRow.length).setValues([newRow])

                                                return ContentService
                                                      .createTextOutput(JSON.stringify({ 'result': 'success', 'row': nextRow }))
                                                            .setMimeType(ContentService.MimeType.JSON)
                                                              }

                                                                catch (e) {
                                                                    return ContentService
                                                                          .createTextOutput(JSON.stringify({ 'result': 'error', 'error': e }))
                                                                                .setMimeType(ContentService.MimeType.JSON)
                                                                                  }

                                                                                    finally {
                                                                                        lock.releaseLock()
                                                                                          }
                                                                                          }



                                                                                          * {
                                                                                          margin: 0;
                                                                                          padding: 0;
                                                                                      }
                                                                                      
                                                                                      body {
                                                                                          display: flex;
                                                                                          justify-content: center;
                                                                                          align-items: center;
                                                                                          width: 100%;
                                                                                          height: 109vh;
                                                                                          background-repeat: no-repeat;
                                                                                          width: 100%;
                                                                                          background: linear-gradient(to top, rgb(0,0,0,0.5)50%,rgb(0,0,0,0.5)50%,rgb(0,0,0,0.5)50%);
                                                                                          background-image: url(bg.jpg);
                                                                                          background-position: center;
                                                                                          background-size: cover;
                                                                                          height: 109vh;* {
                                                                                              margin: 0;
                                                                                              padding: 0;
                                                                                          }
                                                                                          
                                                                                          body {
                                                                                              display: flex;
                                                                                              justify-content: center;
                                                                                              align-items: center;
                                                                                              width: 100%;
                                                                                              height: 100vh;
                                                                                              background-repeat: no-repeat;
                                                                                              background: linear-gradient(to top, rgb(0,0,0,0.5)50%,rgb(0,0,0,0.5)50%,rgb(0,0,0,0.5)50%);
                                                                                              background-image: url(bg.jpg);
                                                                                              background-position: center;
                                                                                              background-size: cover;
                                                                                          }
                                                                                          
                                                                                          button, p {
                                                                                              width: 300px;
                                                                                              height: 40px;
                                                                                              outline: none;
                                                                                              border: none;
                                                                                              background-color: orange;
                                                                                              color: white;
                                                                                              font-size: 20px;
                                                                                              border-radius: 2em;
                                                                                              position: relative;
                                                                                          }
                                                                                          
                                                                                          .loader {
                                                                                              border: 4px solid #f3f3f3; /* Light grey */
                                                                                              border-top: 4px solid #3498db; /* Blue */
                                                                                              border-radius: 50%;
                                                                                              width: 20px;
                                                                                              height: 20px;
                                                                                              animation: spin 0.5s linear infinite;
                                                                                              margin: 0 auto; /* Center the loader */
                                                                                              position: absolute;
                                                                                              top: 50%;
                                                                                              left: 50%;
                                                                                              transform: translate(-50%, -50%);
                                                                                              z-index: 1;
                                                                                          }
                                                                                          
                                                                                          @keyframes spin {
                                                                                              0% { transform: rotate(0deg); }
                                                                                              100% { transform: rotate(360deg); }
                                                                                          }
                                                                                          
                                                                                          h1, h2 {
                                                                                              color: green;
                                                                                              font-size: 16px;
                                                                                          }
                                                                                          
                                                                                          background-repeat: repeat;
                                                                                      }
                                                                                      button{
                                                                                          width: 100px;
                                                                                          height: 40px;
                                                                                          background: orange;
                                                                                          border: 2px orange;
                                                                                          margin-top: 13px;
                                                                                          color: white;
                                                                                          font-size: 15px;
                                                                                          border-top-right-radius: 5px;
                                                                                          border-bottom-right-radius: 5px;
                                                                                          cursor: pointer;
                                                                                          transition: 0.4s ease;
                                                                                      }
                                                                                      button:hover{
                                                                                          background-color: white;
                                                                                          color: orange;
                                                                                      }
                                                                                      
                                                                                      button:focus{
                                                                                          outline: none;
                                                                                      }
                                                                                      
                                                                                      h1, h2 {
                                                                                          color: green;
                                                                                          font-size: 16px;
                                                                                      
                                                                                      }
                                                                                      p{
                                                                                          width: 300px;
                                                                                          height: 25px;
                                                                                          outline: none;
                                                                                          border: none;
                                                                                          height: 40px;
                                                                                          background-color: rgb(255, 255, 255);
                                                                                          color: orange;
                                                                                          font-size: 30px;
                                                                                          border-radius: 2em;
                                                                                          
                                                                                      }
                                                                                      .loader {
                                                                                          border: 4px solid #f3f3f3; /* Light grey */
                                                                                          border-top: 4px solid #3498db; /* Blue */
                                                                                          border-radius: 50%;
                                                                                          width: 20px;
                                                                                          height: 20px;
                                                                                          animation: spin 0.5s linear infinite;
                                                                                          margin: 0 auto; /* Center the loader */
                                                                                          
                                                                                      }
                                                                                      
                                                                                      @keyframes spin {
                                                                                          0% { transform: rotate(0deg); }
                                                                                          100% { transform: rotate(360deg); }
                                                                                      }