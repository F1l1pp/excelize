import {ExcelComponent} from "@core/ExcelComponent";

export class Header extends ExcelComponent {
    static className = 'excel__header'

    toHTML() {
        return `
            <div class="container">
            <div class="excel__header">
                <input type="text" class="input" value="Новая таблица" >
                <div>
                    <div class="button">
                        <span class="material-symbols-outlined">delete</span>
                    </div>
                    <div class="button">
                        <span class="material-symbols-outlined">home</span>
                    </div>
                </div>
                <div class="excel__toolbar">
                    <div class="button">
                        <span class="material-symbols-outlined">
                        
</span>
                    </div>
                    <div class="button">
                        <span class="material-symbols-outlined">
                        format_align_center</span>
                    </div>
                    <div class="button">
                        <span class="material-symbols-outlined">
                        format_align_right</span>
                    </div>
                    <div class="button">
                        <span class="material-symbols-outlined">
                        format_bold</span>
                    </div>
                    <div class="button">
                        <span class="material-symbols-outlined">
                        format_italic</span>
                    </div>
                    <div class="button">
                        <span class="material-symbols-outlined">
                        format_underlined</span>
                    </div>

                </div>
            </div>
        </div>
        `;
    }
}