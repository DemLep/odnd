export default class ODNDCharacterSheet extends foundry.appv1.sheets.ActorSheet {
    sheetContext = {};

    static DEFAULT_OPTIONS = {
        tag: "form",
        form: {
            handler: MyApplication.myFormHandler,
            submitOnChange: true,
            closeOnSubmit: false
        }
    }

    get template(){
        return `systems/odnd/templates/sheets/actor/player_character-sheet.html`;
    }

    async _prepareContext(options) {
        const BASE_DATA = await super._prepareContext();

        const CONTEXT = {
            actor: BASE_DATA.document,
            effects: BASE_DATA.document.effects,
            owner: BASE_DATA.document.isOwner,
            items: BASE_DATA.document.items,
            sytem: BASE_DATA.document.sytem,
            editable: BASE_DATA.editable,
            isGM: BASE_DATA.user.isGM
        }

        this.sheetContext = CONTEXT;

        return CONTEXT;
    }
}