const {HandlebarsApplicationMixin} = foundry.applications.api
const {ActorSheetV2} = foundry.applications.sheets

export default class ODNDCharacterSheet extends HandlebarsApplicationMixin(ActorSheetV2) {
    sheetContext = {};

    static DEFAULT_OPTIONS = {
        tag: "form",
        form: {
            handler: ODNDCharacterSheet.#onSubmitForm,
            submitOnChange: true,
            closeOnSubmit: false
        }
    }

    static async #onSubmitForm(event, form, formData) {
        event.preventDefault()
        await this.document.update(formData.object)
    }

    static PARTS = {
        form: {
            template: "systems/odnd/templates/sheets/actor/player_character-sheet.html"
        }
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