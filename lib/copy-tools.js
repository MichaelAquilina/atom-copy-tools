'use babel';

import { CompositeDisposable } from 'atom';

export default {

  subscriptions: null,

  activate(state) {
    // Events subscribed to in atom's system can be easily cleaned up with a CompositeDisposable
    this.subscriptions = new CompositeDisposable();

    this.subscriptions.add(
      atom.commands.add(
          "atom-text-editor",
          "copy-tools:copy-relative-path",
          this.copy_relative_path
      )
    );

;   this.subscriptions.add(
      atom.commands.add(
          "atom-text-editor",
          "copy-tools:copy-relative-path-and-line",
          this.copy_relative_path_and_line
      )
    );
  },

  deactivate() {
    this.subscriptions.dispose();
  },

  serialize() {
    return {};
  },

  copy_relative_path() {
    let editor = atom.workspace.getActiveTextEditor();
    let relative_path = atom.project.relativizePath(editor.getPath())[1];
    atom.clipboard.write(relative_path);
    atom.notifications.addInfo("Copied relative path to clipboard");
  },

  copy_relative_path_and_line() {
    let editor = atom.workspace.getActiveTextEditor();
    let relative_path = atom.project.relativizePath(editor.getPath())[1];
    let line_number = editor.getCursorBufferPosition().row  + 1
    atom.clipboard.write(`${relative_path}:${line_number}`);
    atom.notifications.addInfo("Copied relative path and line to clipboard");
  }
};
