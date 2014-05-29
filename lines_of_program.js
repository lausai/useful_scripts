var WINDOW_HANDLE = 0; // This should be 0 if in script.
var OPTIONS       = 0; // Set to simplest mode, if set to &H10& then
                       // user can set the folder by typing the path manually
var shell  = new ActiveXObject('Shell.Application');
var folder = shell.BrowseForFolder(WINDOW_HANDLE, '選擇根目錄', OPTIONS);
var path   = '.';

// Get the file extension
if (folder)
        path = folder.Self.Path;

var sc      = new ActiveXObject("MSScriptControl.ScriptControl");
var code    = 'InputBox("輸入副檔名, 副檔名可以不只一個, 格式為xxx:yyy:zzz")';
sc.Language = 'VBScript';
var result  = sc.Eval(code);

if (result)
        var extArr  = result.split(':');
else
        WScript.Quit();


// Start counting the lines
var linesInFiles = '';

WScript.Echo('程式總行數: ' + linesOfFolder(extArr, path) + linesInFiles);

function linesOfFolder(extArr, path) {
        var fso         = new ActiveXObject('Scripting.FileSystemObject');
        var lines       = 0;
        var files       = new Enumerator(fso.GetFolder(path).Files);

        for (; !files.atEnd(); files.moveNext()) {
                var file = files.item();
                
                if (inArray(extArr, fileExtension(file.Name))) {
                        var lineCount = linesOfFile(file.Path);

                        lines        += lineCount;
                        linesInFiles += ("\n" + file.Name + ': ' + lineCount);
                }
        }

        var subFolders  = new Enumerator(fso.GetFolder(path).SubFolders);

        for (; !subFolders.atEnd(); subFolders.moveNext())
                lines += linesOfFolder(extArr, subFolders.item().Path);

        return lines;
}

// Return the lines of a file
function linesOfFile(file_path) {
        var fso   = new ActiveXObject('Scripting.FileSystemObject');
        var f     = fso.OpenTextFile(file_path);
        var lines = 0;

        while (!f.AtEndOfStream) {
                f.ReadLine();
                ++lines;
        }

        f.Close();

        return lines;
}

// Return the file extension for a given file name
function fileExtension(file_name) {
        var arr = file_name.split('.');

        return arr[arr.length - 1];
}

function inArray(arr, value) {
        for (var i = 0; i < arr.length; i++) {
                if (arr[i] == value)
                        return true;
        }

        return false;
}
