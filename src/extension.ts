import * as vscode from 'vscode';

// This method is called when your extension is activated
export function activate(context: vscode.ExtensionContext) {
	
	vscode.window.showInformationMessage('Extension activated');

	let disposable = vscode.commands.registerCommand('test.helloWorld', () => {
		vscode.window.showInformationMessage('Hello World from test!');
		console.log('EventHandler');
	});

	context.subscriptions.push(disposable);
}

// this method is called when your extension is deactivated
export function deactivate() {}
