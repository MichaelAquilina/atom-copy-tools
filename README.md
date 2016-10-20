# Atom Copy Tools

Simple Package that allows you to copy various pieces of information into your clipboard.

Currently these two commands are supported:
* Copy relative path of current file into clipboard (e.g. lib/copy-tools.js)
* Copy relative path _and_ current line number into clipboard (e.g. lib/copy-tools.js:7)

I have found these two commands very useful when using tools like gdb/pdb/pytest to specify points
where you need to break or specific files you wish to run.

These two are availble in the context menu while in the text editor and are also available for key
binding to shortcuts as per usual in atom. The tww commands are;

```
copy-tools:copy-relative-path
copy-tools:copy-relative-path-and-line
```
