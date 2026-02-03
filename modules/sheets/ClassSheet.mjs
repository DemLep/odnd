const {HandlebarsApplicationMixin} = foundry.applications.api
const {ItemSheetV2} = foundry.applications.sheets

export default class ODNDClassSheet extends HandlebarsApplicationMixin(ItemSheetV2) {
    sheetContext = {};

    static DEFAULT_OPTIONS = {
        classes: ["odnd", "item", "standard-form"],
        tag: "form",
        position: {
          width: 1000
        },
        window: {
            resizable: true
        },
        form: {
            submitOnChange: true,
            closeOnSubmit: false
        }
    }

    static PARTS = {
        form: {
            template: "systems/odnd/templates/sheets/item/class-sheet.html"
        }
    }

    async _prepareContext(options) {
        const CONTEXT = await super._prepareContext();

        Object.assign(CONTEXT, {
            item: this.item,
            flags: this.item.flags,
            itemFields: this.item.schema.fields,
            system: this.item.system,
            owner: this.document.isOwner,
            limited: this.document.limited,
            config: CONFIG
        });

        return CONTEXT;
    }

    
}