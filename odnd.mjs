import ODNDCharacterSheet from "./modules/sheets/ODNDCharacterSheet.mjs";

Hooks.once("init", () => {
	console.log("ODND | Initalizing Dungeons and Dragons Original System");
	
	const DocumentSheetConfig = foundry.applications.apps.DocumentSheetConfig;
	
	DocumentSheetConfig.unregisterSheet(Actor, "core", foundry.appv1.sheets.ActorSheet);
	DocumentSheetConfig.registerSheet(Actor, "odnd", ODNDCharacterSheet, {types: ["player_character"], makeDefault: true, label: "ODND.SheetClassCharacter"});
});