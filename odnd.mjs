//Data Models
import {PlayerCharacterData} from "./modules/data_models/actor-data.mjs";
import {ClassData} from "./modules/data_models/class-data.mjs";

//Sheets
import ODNDCharacterSheet from "./modules/sheets/CharacterSheet.mjs";
import ODNDClassSheet from "./modules/sheets/ClassSheet.mjs";

Hooks.once("init", () => {
	console.log("ODND | Initalizing Dungeons and Dragons Original System");
	
	//Assign Data Models
	Object.assign(CONFIG.Actor.dataModels, {playerCharacter: PlayerCharacterData});
	Object.assign(CONFIG.Item.dataModels, {class: ClassData});

	//Shorten DocumentSheetConfig path
	const DocumentSheetConfig = foundry.applications.apps.DocumentSheetConfig;
	
	// Unregister Default Actor Sheet
	DocumentSheetConfig.unregisterSheet(Actor, "core", foundry.appv1.sheets.ActorSheet);
	// Register OD&D Actor Sheet
	DocumentSheetConfig.registerSheet(Actor, "odnd", ODNDCharacterSheet, {types: ["player_character"], makeDefault: true, label: "ODND.SheetClass.Character"});

	//Register OD&D Class Sheet
	DocumentSheetConfig.registerSheet(Item, "odnd", ODNDClassSheet, {types: ["class"], makeDefault: true, label: "ODND.SheetClass.Class"});
});