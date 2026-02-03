const {HandlebarsApplicationMixin} = foundry.applications.api
const {ActorSheetV2} = foundry.applications.sheets

export default class ODNDCharacterSheet extends HandlebarsApplicationMixin(ActorSheetV2) {
    sheetContext = {};

    static DEFAULT_OPTIONS = {
        classes: ["odnd", "actor", "standard-form"],
        tag: "form",
        position: {
          width: 750
        },
        window: {
            resizable: true
        },
        resizable: true,
        form: {
            submitOnChange: true,
            closeOnSubmit: false
        }
    }

    static PARTS = {
        form: {
            template: "systems/odnd/templates/sheets/actor/player_character-sheet.html"
        }
    }

    async _prepareContext(options) {
        const CONTEXT = await super._prepareContext();

        Object.assign(CONTEXT, {
            actor: this.actor,
            flags: this.actor.flags,
            actorFields: this.actor.schema.fields,
            system: this.actor.system,
            owner: this.document.isOwner,
            limited: this.document.limited,
            config: CONFIG
        });

        return CONTEXT;
    }

    
}