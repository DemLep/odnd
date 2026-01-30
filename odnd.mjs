import ODNDCharacterSheet from ".modules/sheets/ODNDCharacterSheet.mjs";

Hooks.once("init", function() {
	log("ODND | Initalizing Dungeons and Dragons Original System");
	
	const DOCUMENT_CONFIG = foundry.application.apps.DocumentSheetConfig;
	
	DOCUMENT_CONFIG.unregisterSheet(Actor, "core", foundry.appv1.sheets,ActorSheet):
	DOCUMENT_CONFIG.registerSheet(Actor, "odnd", ODNDCharacterSheet, {types: ["player_character"], makeDefault: true, label: "ODND.SheetClassCharacter"});
}