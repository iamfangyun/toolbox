// ========================================
// 工具宝 - ToolBox Online
// ========================================

// ===== i18n 国际化 =====
const I18N = {
    zh: {
        // 站点
        site_name: '工具宝',
        tagline: '免费在线工具箱',
        search_placeholder: '🔍 搜索工具...',
        footer: '纯前端 · 无需服务器 · 数据不上传',

        // 分类
        cat_text: '📝 文本工具',
        cat_encode: '🔐 编码工具',
        cat_dev: '💻 开发工具',
        cat_crypto: '🔒 加密工具',
        cat_convert: '🔄 转换工具',

        // 工具名
        tool_word_counter: '字数统计',
        tool_case_convert: '大小写转换',
        tool_text_dedup: '文本去重',
        tool_text_replace: '文本替换',
        tool_base64: 'Base64 编解码',
        tool_url_encode: 'URL 编解码',
        tool_html_entity: 'HTML 实体编解码',
        tool_json_format: 'JSON 格式化',
        tool_regex_test: '正则表达式测试',
        tool_base_convert: '进制转换',
        tool_uuid_gen: 'UUID 生成器',
        tool_hash_gen: 'SHA 哈希生成',
        tool_password_gen: '密码生成器',
        tool_timestamp: '时间戳转换',
        tool_color_convert: '颜色转换',

        // 通用按钮
        btn_copy: '复制结果',
        btn_encode: '编码 →',
        btn_decode: '← 解码',
        btn_convert: '转换',
        btn_replace: '替换',
        btn_format: '格式化',
        btn_minify: '压缩',
        btn_generate: '生成密码',
        btn_dedup: '去重',

        // 通用标签
        label_original: '原始文本',
        label_encoded: '编码结果',
        label_b64_result: 'Base64 结果',
        label_entity_encoded: '实体编码',
        label_binary: '二进制 (BIN)',
        label_octal: '八进制 (OCT)',
        label_decimal: '十进制 (DEC)',
        label_hex: '十六进制 (HEX)',

        // 通用占位符
        result_ph: '结果...',
        copied: '已复制到剪贴板',

        // 1. 字数统计
        wc_desc: '统计文本的字符数、字数、行数、段落数等',
        wc_input_ph: '在此输入或粘贴文本...',
        stat_chars: '字符数',
        stat_chars_ns: '字符(不含空格)',
        stat_words: '字数',
        stat_lines: '行数',
        stat_paragraphs: '段落数',
        stat_chinese: '中文字符',

        // 2. 大小写
        case_desc: '英文文本大小写批量转换',
        case_input_ph: '输入英文文本...',
        case_upper: '全部大写',
        case_lower: '全部小写',
        case_title: '首字母大写',
        case_sentence: '句首大写',
        case_toggle: '大小写互换',

        // 3. 去重
        dedup_desc: '按行去除重复文本，支持忽略空行和排序',
        dedup_input_ph: '每行一条文本，重复行将被去除...',
        dedup_ignore_empty: '忽略空行',
        dedup_sort: '结果排序',
        dedup_done: '去重完成：{0} 行 → {1} 行，移除 {2} 行重复',

        // 4. 替换
        replace_desc: '批量查找替换文本，支持正则表达式',
        replace_input_ph: '输入原始文本...',
        replace_find_ph: '查找内容',
        replace_to_ph: '替换为',
        replace_regex: '正则',
        replace_case: '区分大小写',
        replace_error: '错误：',

        // 5-7. 编码
        b64_desc: '文本与 Base64 格式互相转换',
        b64_input_ph: '输入文本或Base64字符串...',
        b64_output_ph: '编码/解码结果...',
        b64_decode_error: '解码错误：无效的 Base64 字符串',
        url_desc: 'URL 特殊字符编码与解码',
        url_input_ph: '输入URL或文本...',
        url_output_ph: '编码/解码结果...',
        entity_desc: 'HTML 特殊字符与实体名称互转',

        // 8. JSON
        json_desc: '格式化、压缩、验证 JSON 数据',
        json_valid: '✓ 有效 JSON ({0})',
        json_invalid: '✗ JSON 无效：',

        // 9. 正则
        regex_desc: '实时测试正则表达式，高亮匹配结果',
        regex_pattern_ph: '输入正则表达式',
        regex_global: '全局(g)',
        regex_icase: '忽略大小写(i)',
        regex_multiline: '多行(m)',
        regex_input_ph: '输入测试文本...',
        regex_found: '找到 {0} 个匹配',
        regex_no_match: '无匹配',
        regex_error: '正则错误：',
        regex_matches: '匹配项：',

        // 11. UUID
        uuid_desc: '生成随机 UUID (v4)',
        uuid_upper: '大写',
        uuid_nodash: '去掉横线',

        // 12. Hash
        hash_desc: '使用浏览器原生 CryptoAPI 计算 SHA 哈希值',
        hash_input_ph: '输入要计算哈希的文本...',

        // 13. 密码
        pwd_desc: '生成高强度随机密码',
        pwd_click: '点击生成',
        pwd_length: '密码长度：',
        pwd_upper: '大写字母 A-Z',
        pwd_lower: '小写字母 a-z',
        pwd_digits: '数字 0-9',
        pwd_symbols: '特殊符号 !@#$...',
        pwd_gen5: '生成 5 个',
        pwd_select_one: '请至少选择一种字符类型',

        // 14. 时间戳
        ts_desc: 'Unix 时间戳与可读日期互转',
        ts_current: '当前时间戳：',
        ts_to_date: '时间戳 → 日期',
        ts_input_ph: '输入时间戳（秒或毫秒）',
        date_to_ts: '日期 → 时间戳',
        ts_invalid: '无效的时间戳',
        ts_local: '本地时间：',
        ts_utc: 'UTC时间：',
        ts_iso: 'ISO格式：',
        ts_seconds: '时间戳(秒)：',
        ts_millis: '时间戳(毫秒)：',

        // 15. 颜色
        color_desc: 'HEX / RGB / HSL 颜色格式互转',
        color_random: '随机颜色',
    },

    en: {
        // Site
        site_name: 'ToolBox',
        tagline: 'Free Online Tools',
        search_placeholder: '🔍 Search tools...',
        footer: 'Pure frontend · No server · Data stays local',

        // Categories
        cat_text: '📝 Text Tools',
        cat_encode: '🔐 Encoding',
        cat_dev: '💻 Dev Tools',
        cat_crypto: '🔒 Crypto',
        cat_convert: '🔄 Converters',

        // Tool names
        tool_word_counter: 'Word Counter',
        tool_case_convert: 'Case Converter',
        tool_text_dedup: 'Remove Duplicates',
        tool_text_replace: 'Find & Replace',
        tool_base64: 'Base64 Encode/Decode',
        tool_url_encode: 'URL Encode/Decode',
        tool_html_entity: 'HTML Entity Encode/Decode',
        tool_json_format: 'JSON Formatter',
        tool_regex_test: 'Regex Tester',
        tool_base_convert: 'Base Converter',
        tool_uuid_gen: 'UUID Generator',
        tool_hash_gen: 'SHA Hash Generator',
        tool_password_gen: 'Password Generator',
        tool_timestamp: 'Timestamp Converter',
        tool_color_convert: 'Color Converter',

        // Common buttons
        btn_copy: 'Copy',
        btn_encode: 'Encode →',
        btn_decode: '← Decode',
        btn_convert: 'Convert',
        btn_replace: 'Replace',
        btn_format: 'Format',
        btn_minify: 'Minify',
        btn_generate: 'Generate',
        btn_dedup: 'Deduplicate',

        // Common labels
        label_original: 'Original',
        label_encoded: 'Encoded',
        label_b64_result: 'Base64 Result',
        label_entity_encoded: 'Entity Encoded',
        label_binary: 'Binary (BIN)',
        label_octal: 'Octal (OCT)',
        label_decimal: 'Decimal (DEC)',
        label_hex: 'Hexadecimal (HEX)',

        // Common placeholders
        result_ph: 'Result...',
        copied: 'Copied to clipboard',

        // 1. Word Counter
        wc_desc: 'Count characters, words, lines, paragraphs and more',
        wc_input_ph: 'Type or paste text here...',
        stat_chars: 'Characters',
        stat_chars_ns: 'Chars (no spaces)',
        stat_words: 'Words',
        stat_lines: 'Lines',
        stat_paragraphs: 'Paragraphs',
        stat_chinese: 'Chinese Chars',

        // 2. Case
        case_desc: 'Batch convert English text case',
        case_input_ph: 'Enter English text...',
        case_upper: 'UPPERCASE',
        case_lower: 'lowercase',
        case_title: 'Title Case',
        case_sentence: 'Sentence case',
        case_toggle: 'tOGGLE cASE',

        // 3. Dedup
        dedup_desc: 'Remove duplicate lines, with options to ignore blanks and sort',
        dedup_input_ph: 'One item per line, duplicates will be removed...',
        dedup_ignore_empty: 'Ignore empty lines',
        dedup_sort: 'Sort result',
        dedup_done: 'Done: {0} lines → {1} lines, removed {2} duplicates',

        // 4. Replace
        replace_desc: 'Batch find and replace, supports regex',
        replace_input_ph: 'Enter original text...',
        replace_find_ph: 'Find',
        replace_to_ph: 'Replace with',
        replace_regex: 'Regex',
        replace_case: 'Case sensitive',
        replace_error: 'Error: ',

        // 5-7. Encoding
        b64_desc: 'Convert text to/from Base64 format',
        b64_input_ph: 'Enter text or Base64 string...',
        b64_output_ph: 'Encoded/decoded result...',
        b64_decode_error: 'Decode error: invalid Base64 string',
        url_desc: 'Encode/decode URL special characters',
        url_input_ph: 'Enter URL or text...',
        url_output_ph: 'Encoded/decoded result...',
        entity_desc: 'Convert HTML special characters to/from entity names',

        // 8. JSON
        json_desc: 'Format, minify and validate JSON data',
        json_valid: '✓ Valid JSON ({0})',
        json_invalid: '✗ Invalid JSON: ',

        // 9. Regex
        regex_desc: 'Test regex patterns with real-time match highlighting',
        regex_pattern_ph: 'Enter regex pattern',
        regex_global: 'Global (g)',
        regex_icase: 'Case insensitive (i)',
        regex_multiline: 'Multiline (m)',
        regex_input_ph: 'Enter test text...',
        regex_found: '{0} matches found',
        regex_no_match: 'No matches',
        regex_error: 'Regex error: ',
        regex_matches: 'Matches: ',

        // 11. UUID
        uuid_desc: 'Generate random UUIDs (v4)',
        uuid_upper: 'Uppercase',
        uuid_nodash: 'No dashes',

        // 12. Hash
        hash_desc: 'Calculate SHA hashes using native browser CryptoAPI',
        hash_input_ph: 'Enter text to hash...',

        // 13. Password
        pwd_desc: 'Generate strong random passwords',
        pwd_click: 'Click to generate',
        pwd_length: 'Length: ',
        pwd_upper: 'Uppercase A-Z',
        pwd_lower: 'Lowercase a-z',
        pwd_digits: 'Digits 0-9',
        pwd_symbols: 'Symbols !@#$...',
        pwd_gen5: 'Generate 5',
        pwd_select_one: 'Please select at least one character type',

        // 14. Timestamp
        ts_desc: 'Convert Unix timestamps to/from readable dates',
        ts_current: 'Current timestamp: ',
        ts_to_date: 'Timestamp → Date',
        ts_input_ph: 'Enter timestamp (seconds or milliseconds)',
        date_to_ts: 'Date → Timestamp',
        ts_invalid: 'Invalid timestamp',
        ts_local: 'Local: ',
        ts_utc: 'UTC: ',
        ts_iso: 'ISO: ',
        ts_seconds: 'Seconds: ',
        ts_millis: 'Milliseconds: ',

        // 15. Color
        color_desc: 'Convert between HEX / RGB / HSL color formats',
        color_random: 'Random Color',
    }
};

// 当前语言：优先用户手动选择，否则根据浏览器语言自动判断
function detectLang() {
    const saved = localStorage.getItem('toolbox-lang');
    if (saved) return saved;
    // navigator.language: "zh-CN", "zh-TW", "zh-HK", "en-US", "ja", ...
    const nav = (navigator.language || navigator.userLanguage || '').toLowerCase();
    if (nav.startsWith('zh')) return 'zh';
    return 'en';
}
let currentLang = detectLang();

// 获取翻译文本
function t(key) {
    return I18N[currentLang][key] || I18N['zh'][key] || key;
}

// 带模板的翻译
function tf(key, ...args) {
    let s = t(key);
    args.forEach((v, i) => { s = s.replace(`{${i}}`, v); });
    return s;
}

// 应用所有翻译到DOM
function applyI18n() {
    const lang = currentLang;
    const dict = I18N[lang];

    // 更新 html lang 属性
    document.documentElement.lang = lang === 'zh' ? 'zh-CN' : 'en';

    // 更新页面标题
    document.title = lang === 'zh' ? '工具宝 - 在线实用工具箱' : 'ToolBox - Free Online Tools';

    // 所有 data-i18n 元素
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (dict[key] !== undefined) el.textContent = dict[key];
    });

    // 所有 data-i18n-placeholder 元素
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const key = el.getAttribute('data-i18n-placeholder');
        if (dict[key] !== undefined) el.placeholder = dict[key];
    });

    // 更新语言切换按钮
    const nextLang = lang === 'zh' ? 'EN' : '中文';
    document.getElementById('lang-label').textContent = nextLang;
    document.querySelectorAll('.lang-label-mobile').forEach(el => el.textContent = nextLang);
}

// 切换语言
function toggleLang() {
    currentLang = currentLang === 'zh' ? 'en' : 'zh';
    localStorage.setItem('toolbox-lang', currentLang);
    applyI18n();
}

// ===== 导航切换 =====
document.querySelectorAll('.nav-item').forEach(item => {
    item.addEventListener('click', (e) => {
        e.preventDefault();
        const toolId = item.dataset.tool;
        switchTool(toolId);
    });
});

function switchTool(toolId) {
    document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
    const navItem = document.querySelector(`.nav-item[data-tool="${toolId}"]`);
    if (navItem) navItem.classList.add('active');

    document.querySelectorAll('.tool-panel').forEach(p => p.classList.remove('active'));
    const panel = document.getElementById('tool-' + toolId);
    if (panel) panel.classList.add('active');

    document.getElementById('sidebar').classList.remove('open');
}

// ===== 搜索工具 =====
document.getElementById('tool-search').addEventListener('input', function () {
    const q = this.value.trim().toLowerCase();
    document.querySelectorAll('.nav-group').forEach(group => {
        let hasVisible = false;
        group.querySelectorAll('.nav-item').forEach(item => {
            const zh = I18N.zh[item.getAttribute('data-i18n')] || '';
            const en = I18N.en[item.getAttribute('data-i18n')] || '';
            const match = !q || zh.toLowerCase().includes(q) || en.toLowerCase().includes(q);
            item.classList.toggle('hidden', !match);
            if (match) hasVisible = true;
        });
        group.classList.toggle('hidden', !hasVisible);
    });
});

// ===== 移动端菜单 =====
document.getElementById('menu-toggle').addEventListener('click', () => {
    document.getElementById('sidebar').classList.toggle('open');
});

document.getElementById('main-content').addEventListener('click', () => {
    document.getElementById('sidebar').classList.remove('open');
});

// ===== 通用复制 =====
function copyResult(id) {
    const el = document.getElementById(id);
    copyText(el.value || el.textContent);
}

function copyText(text) {
    if (!text || text === t('pwd_click')) return;
    navigator.clipboard.writeText(text).then(() => {
        showToast(t('copied'));
    }).catch(() => {
        const ta = document.createElement('textarea');
        ta.value = text;
        document.body.appendChild(ta);
        ta.select();
        document.execCommand('copy');
        document.body.removeChild(ta);
        showToast(t('copied'));
    });
}

function showToast(msg) {
    const toast = document.createElement('div');
    toast.textContent = msg;
    Object.assign(toast.style, {
        position: 'fixed', bottom: '24px', left: '50%', transform: 'translateX(-50%)',
        background: '#1a1a2e', color: '#fff', padding: '10px 24px', borderRadius: '8px',
        fontSize: '14px', zIndex: '9999', boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
        transition: 'opacity 0.3s'
    });
    document.body.appendChild(toast);
    setTimeout(() => { toast.style.opacity = '0'; }, 1500);
    setTimeout(() => { toast.remove(); }, 1800);
}

// ========================================
// 1. 字数统计
// ========================================
document.getElementById('wc-input').addEventListener('input', function () {
    const text = this.value;
    document.getElementById('wc-chars').textContent = text.length;
    document.getElementById('wc-chars-no-space').textContent = text.replace(/\s/g, '').length;

    const chineseChars = (text.match(/[\u4e00-\u9fff\u3400-\u4dbf]/g) || []).length;
    const englishWords = text.replace(/[\u4e00-\u9fff\u3400-\u4dbf]/g, ' ').trim().split(/\s+/).filter(w => w).length;
    document.getElementById('wc-words').textContent = chineseChars + englishWords;

    document.getElementById('wc-lines').textContent = text ? text.split('\n').length : 0;
    document.getElementById('wc-paragraphs').textContent = text ? text.split(/\n\s*\n/).filter(p => p.trim()).length : 0;
    document.getElementById('wc-chinese').textContent = chineseChars;
});

// ========================================
// 2. 大小写转换
// ========================================
function caseConvert(type) {
    const input = document.getElementById('case-input').value;
    let result = '';
    switch (type) {
        case 'upper': result = input.toUpperCase(); break;
        case 'lower': result = input.toLowerCase(); break;
        case 'title': result = input.replace(/\b\w/g, c => c.toUpperCase()); break;
        case 'sentence': result = input.replace(/(^\s*\w|[.!?]\s+\w)/gm, c => c.toUpperCase()); break;
        case 'toggle': result = input.split('').map(c => c === c.toUpperCase() ? c.toLowerCase() : c.toUpperCase()).join(''); break;
    }
    document.getElementById('case-output').value = result;
}

// ========================================
// 3. 文本去重
// ========================================
function textDedup() {
    const input = document.getElementById('dedup-input').value;
    const ignoreEmpty = document.getElementById('dedup-ignore-empty').checked;
    const doSort = document.getElementById('dedup-sort').checked;

    let lines = input.split('\n');
    if (ignoreEmpty) lines = lines.filter(l => l.trim());

    const original = lines.length;
    const seen = new Set();
    const result = [];
    lines.forEach(l => {
        if (!seen.has(l)) { seen.add(l); result.push(l); }
    });

    if (doSort) result.sort();
    const removed = original - result.length;
    document.getElementById('dedup-info').textContent = tf('dedup_done', original, result.length, removed);
    document.getElementById('dedup-output').value = result.join('\n');
}

// ========================================
// 4. 文本替换
// ========================================
function textReplace() {
    const input = document.getElementById('replace-input').value;
    const find = document.getElementById('replace-find').value;
    const to = document.getElementById('replace-to').value;
    const useRegex = document.getElementById('replace-regex').checked;
    const caseSensitive = document.getElementById('replace-case').checked;

    if (!find) return;

    try {
        let result;
        if (useRegex) {
            const flags = caseSensitive ? 'g' : 'gi';
            result = input.replace(new RegExp(find, flags), to);
        } else {
            if (caseSensitive) {
                result = input.split(find).join(to);
            } else {
                const re = new RegExp(find.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'gi');
                result = input.replace(re, to);
            }
        }
        document.getElementById('replace-output').value = result;
    } catch (e) {
        document.getElementById('replace-output').value = t('replace_error') + e.message;
    }
}

// ========================================
// 5. Base64
// ========================================
function base64Encode() {
    try {
        const input = document.getElementById('b64-input').value;
        document.getElementById('b64-output').value = btoa(unescape(encodeURIComponent(input)));
    } catch (e) {
        document.getElementById('b64-output').value = t('replace_error') + e.message;
    }
}

function base64Decode() {
    try {
        const input = document.getElementById('b64-output').value || document.getElementById('b64-input').value;
        document.getElementById('b64-output').value = decodeURIComponent(escape(atob(input)));
    } catch (e) {
        document.getElementById('b64-output').value = t('b64_decode_error');
    }
}

// ========================================
// 6. URL
// ========================================
function urlEncode() {
    document.getElementById('url-output').value = encodeURIComponent(document.getElementById('url-input').value);
}

function urlDecode() {
    try {
        const input = document.getElementById('url-output').value || document.getElementById('url-input').value;
        document.getElementById('url-output').value = decodeURIComponent(input);
    } catch (e) {
        document.getElementById('url-output').value = t('replace_error') + e.message;
    }
}

// ========================================
// 7. HTML Entity
// ========================================
function entityEncode() {
    const div = document.createElement('div');
    div.textContent = document.getElementById('entity-input').value;
    document.getElementById('entity-output').value = div.innerHTML;
}

function entityDecode() {
    const div = document.createElement('div');
    div.innerHTML = document.getElementById('entity-output').value || document.getElementById('entity-input').value;
    document.getElementById('entity-output').value = div.textContent;
}

// ========================================
// 8. JSON
// ========================================
function jsonFormat(indent) {
    const input = document.getElementById('json-input').value.trim();
    if (!input) return;

    try {
        const obj = JSON.parse(input);
        const result = indent > 0 ? JSON.stringify(obj, null, indent) : JSON.stringify(obj);
        document.getElementById('json-output').value = result;
        const size = new Blob([result]).size;
        document.getElementById('json-info').textContent = tf('json_valid', formatBytes(size));
        document.getElementById('json-info').className = 'info-text';
    } catch (e) {
        document.getElementById('json-output').value = '';
        document.getElementById('json-info').textContent = t('json_invalid') + e.message;
        document.getElementById('json-info').className = 'info-text error-text';
    }
}

function formatBytes(bytes) {
    if (bytes < 1024) return bytes + ' B';
    if (bytes < 1048576) return (bytes / 1024).toFixed(1) + ' KB';
    return (bytes / 1048576).toFixed(1) + ' MB';
}

// ========================================
// 9. Regex
// ========================================
const regexPattern = document.getElementById('regex-pattern');
const regexInput = document.getElementById('regex-input');

function updateRegexFlags() {
    const flags = [];
    if (document.getElementById('regex-flag-g').checked) flags.push('g');
    if (document.getElementById('regex-flag-i').checked) flags.push('i');
    if (document.getElementById('regex-flag-m').checked) flags.push('m');
    document.getElementById('regex-flags').value = flags.join('');
    runRegex();
}

document.getElementById('regex-flag-g').addEventListener('change', updateRegexFlags);
document.getElementById('regex-flag-i').addEventListener('change', updateRegexFlags);
document.getElementById('regex-flag-m').addEventListener('change', updateRegexFlags);
regexPattern.addEventListener('input', runRegex);
regexInput.addEventListener('input', runRegex);

function runRegex() {
    const pattern = regexPattern.value;
    const text = regexInput.value;
    const flags = document.getElementById('regex-flags').value;
    const highlight = document.getElementById('regex-highlight');
    const matchesDiv = document.getElementById('regex-matches');
    const info = document.getElementById('regex-info');

    if (!pattern || !text) {
        highlight.innerHTML = escapeHtml(text);
        matchesDiv.innerHTML = '';
        info.textContent = '';
        return;
    }

    try {
        const matches = [];
        let html = '';
        let lastIndex = 0;
        let match;
        const reExec = new RegExp(pattern, flags);

        while ((match = reExec.exec(text)) !== null) {
            matches.push(match[0]);
            html += escapeHtml(text.slice(lastIndex, match.index));
            html += `<span class="match">${escapeHtml(match[0])}</span>`;
            lastIndex = match.index + match[0].length;
            if (!flags.includes('g')) break;
            if (match[0].length === 0) reExec.lastIndex++;
        }
        html += escapeHtml(text.slice(lastIndex));
        highlight.innerHTML = html;

        if (matches.length > 0) {
            const unique = [...new Set(matches)];
            matchesDiv.innerHTML = `<strong>${t('regex_matches')}</strong>` + unique.map(m =>
                `<span class="match-item">${escapeHtml(m)}</span>`
            ).join('');
            info.textContent = tf('regex_found', matches.length);
            info.className = 'info-text';
        } else {
            matchesDiv.innerHTML = '';
            info.textContent = t('regex_no_match');
            info.className = 'info-text';
        }
    } catch (e) {
        highlight.innerHTML = escapeHtml(text);
        matchesDiv.innerHTML = '';
        info.textContent = t('regex_error') + e.message;
        info.className = 'info-text error-text';
    }
}

function escapeHtml(s) {
    const div = document.createElement('div');
    div.textContent = s;
    return div.innerHTML;
}

// ========================================
// 10. Base Convert
// ========================================
const baseInputs = document.querySelectorAll('#tool-base-convert input[data-base]');
let baseConverting = false;

baseInputs.forEach(input => {
    input.addEventListener('input', () => {
        if (baseConverting) return;
        baseConverting = true;
        const fromBase = parseInt(input.dataset.base);
        const val = input.value.trim();

        if (!val) {
            baseInputs.forEach(i => { if (i !== input) i.value = ''; });
            baseConverting = false;
            return;
        }

        try {
            const decimal = parseInt(val, fromBase);
            if (isNaN(decimal)) throw new Error();
            baseInputs.forEach(i => {
                if (i !== input) i.value = decimal.toString(parseInt(i.dataset.base)).toUpperCase();
            });
        } catch {}
        baseConverting = false;
    });
});

// ========================================
// 11. UUID
// ========================================
function genUUID() {
    document.getElementById('uuid-output').value = formatUUID(generateUUID());
}

function genUUIDBatch(n) {
    const uuids = [];
    for (let i = 0; i < n; i++) uuids.push(formatUUID(generateUUID()));
    document.getElementById('uuid-output').value = uuids.join('\n');
}

function generateUUID() {
    if (crypto.randomUUID) return crypto.randomUUID();
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c => {
        const r = Math.random() * 16 | 0;
        return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16);
    });
}

function formatUUID(uuid) {
    if (document.getElementById('uuid-upper').checked) uuid = uuid.toUpperCase();
    if (document.getElementById('uuid-no-dash').checked) uuid = uuid.replace(/-/g, '');
    return uuid;
}

// ========================================
// 12. Hash
// ========================================
async function calcHash(algo) {
    const input = document.getElementById('hash-input').value;
    if (!input) return;
    try {
        const data = new TextEncoder().encode(input);
        const buf = await crypto.subtle.digest(algo, data);
        const hex = Array.from(new Uint8Array(buf)).map(b => b.toString(16).padStart(2, '0')).join('');
        document.getElementById('hash-output').value = algo + '\n' + hex;
    } catch (e) {
        document.getElementById('hash-output').value = t('replace_error') + e.message;
    }
}

// ========================================
// 13. Password
// ========================================
function genPassword() {
    const chars = getPwdChars();
    if (!chars) { showToast(t('pwd_select_one')); return; }
    document.getElementById('pwd-result').textContent = generateSecureString(chars, parseInt(document.getElementById('pwd-length').value));
    document.getElementById('pwd-batch-output').style.display = 'none';
}

function genPasswordBatch(n) {
    const chars = getPwdChars();
    if (!chars) { showToast(t('pwd_select_one')); return; }
    const length = parseInt(document.getElementById('pwd-length').value);
    const pwds = [];
    for (let i = 0; i < n; i++) pwds.push(generateSecureString(chars, length));
    document.getElementById('pwd-result').textContent = pwds[0];
    const batchOutput = document.getElementById('pwd-batch-output');
    batchOutput.value = pwds.join('\n');
    batchOutput.style.display = 'block';
}

function getPwdChars() {
    let chars = '';
    if (document.getElementById('pwd-upper').checked) chars += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    if (document.getElementById('pwd-lower').checked) chars += 'abcdefghijklmnopqrstuvwxyz';
    if (document.getElementById('pwd-digits').checked) chars += '0123456789';
    if (document.getElementById('pwd-symbols').checked) chars += '!@#$%^&*()_+-=[]{}|;:,.<>?';
    return chars;
}

function generateSecureString(chars, length) {
    const array = new Uint32Array(length);
    crypto.getRandomValues(array);
    return Array.from(array, v => chars[v % chars.length]).join('');
}

// ========================================
// 14. Timestamp
// ========================================
function updateCurrentTimestamp() {
    document.getElementById('ts-now').textContent = Math.floor(Date.now() / 1000);
}
updateCurrentTimestamp();
setInterval(updateCurrentTimestamp, 1000);

const now = new Date();
const pad = n => String(n).padStart(2, '0');
document.getElementById('date-input').value =
    `${now.getFullYear()}-${pad(now.getMonth() + 1)}-${pad(now.getDate())}T${pad(now.getHours())}:${pad(now.getMinutes())}`;

function tsToDate() {
    const input = document.getElementById('ts-input').value.trim();
    if (!input) return;
    let ts = parseInt(input);
    if (isNaN(ts)) { document.getElementById('ts-date-result').textContent = t('ts_invalid'); return; }
    if (ts < 1e12) ts *= 1000;
    const d = new Date(ts);
    if (isNaN(d.getTime())) { document.getElementById('ts-date-result').textContent = t('ts_invalid'); return; }
    document.getElementById('ts-date-result').innerHTML =
        `${t('ts_local')}${d.toLocaleString(currentLang === 'zh' ? 'zh-CN' : 'en-US')}<br>` +
        `${t('ts_utc')}${d.toUTCString()}<br>` +
        `${t('ts_iso')}${d.toISOString()}<br>` +
        `${t('ts_seconds')}${Math.floor(ts / 1000)}<br>` +
        `${t('ts_millis')}${ts}`;
}

function dateToTs() {
    const input = document.getElementById('date-input').value;
    if (!input) return;
    const d = new Date(input);
    if (isNaN(d.getTime())) { document.getElementById('date-ts-result').textContent = t('ts_invalid'); return; }
    document.getElementById('date-ts-result').innerHTML =
        `${t('ts_seconds')}${Math.floor(d.getTime() / 1000)}<br>${t('ts_millis')}${d.getTime()}`;
}

// ========================================
// 15. Color
// ========================================
const colorInputs = document.querySelectorAll('#tool-color-convert input[data-format]');
let colorConverting = false;

colorInputs.forEach(input => {
    input.addEventListener('input', () => {
        if (colorConverting) return;
        colorConverting = true;
        const format = input.dataset.format;
        const val = input.value.trim();
        let r, g, b;

        try {
            if (format === 'hex') {
                const hex = val.replace('#', '');
                if (hex.length === 3) {
                    r = parseInt(hex[0]+hex[0], 16); g = parseInt(hex[1]+hex[1], 16); b = parseInt(hex[2]+hex[2], 16);
                } else if (hex.length === 6) {
                    r = parseInt(hex.substr(0,2), 16); g = parseInt(hex.substr(2,2), 16); b = parseInt(hex.substr(4,2), 16);
                } else { colorConverting = false; return; }
            } else if (format === 'rgb') {
                const m = val.match(/(\d+)\s*,\s*(\d+)\s*,\s*(\d+)/);
                if (!m) { colorConverting = false; return; }
                r = parseInt(m[1]); g = parseInt(m[2]); b = parseInt(m[3]);
            } else if (format === 'hsl') {
                const m = val.match(/(\d+)\s*,\s*(\d+)%?\s*,\s*(\d+)%?/);
                if (!m) { colorConverting = false; return; }
                [r, g, b] = hslToRgb(parseInt(m[1]), parseInt(m[2]), parseInt(m[3]));
            }

            if (isNaN(r) || isNaN(g) || isNaN(b)) { colorConverting = false; return; }
            r = Math.max(0, Math.min(255, r));
            g = Math.max(0, Math.min(255, g));
            b = Math.max(0, Math.min(255, b));

            colorInputs.forEach(i => {
                if (i !== input) {
                    const f = i.dataset.format;
                    if (f === 'hex') i.value = '#' + [r, g, b].map(c => c.toString(16).padStart(2, '0')).join('');
                    if (f === 'rgb') i.value = `rgb(${r}, ${g}, ${b})`;
                    if (f === 'hsl') { const [h, s, l] = rgbToHsl(r, g, b); i.value = `hsl(${h}, ${s}%, ${l}%)`; }
                }
            });
            document.getElementById('color-preview').style.background = `rgb(${r},${g},${b})`;
        } catch {}
        colorConverting = false;
    });
});

function hslToRgb(h, s, l) {
    s /= 100; l /= 100;
    const c = (1 - Math.abs(2 * l - 1)) * s;
    const x = c * (1 - Math.abs((h / 60) % 2 - 1));
    const m = l - c / 2;
    let r, g, b;
    if (h < 60) { r = c; g = x; b = 0; }
    else if (h < 120) { r = x; g = c; b = 0; }
    else if (h < 180) { r = 0; g = c; b = x; }
    else if (h < 240) { r = 0; g = x; b = c; }
    else if (h < 300) { r = x; g = 0; b = c; }
    else { r = c; g = 0; b = x; }
    return [Math.round((r+m)*255), Math.round((g+m)*255), Math.round((b+m)*255)];
}

function rgbToHsl(r, g, b) {
    r /= 255; g /= 255; b /= 255;
    const max = Math.max(r, g, b), min = Math.min(r, g, b);
    let h, s, l = (max + min) / 2;
    if (max === min) { h = s = 0; }
    else {
        const d = max - min;
        s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
        switch (max) {
            case r: h = ((g - b) / d + (g < b ? 6 : 0)) / 6; break;
            case g: h = ((b - r) / d + 2) / 6; break;
            case b: h = ((r - g) / d + 4) / 6; break;
        }
    }
    return [Math.round(h * 360), Math.round(s * 100), Math.round(l * 100)];
}

function pickRandomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    document.getElementById('color-hex').value = '#' + [r, g, b].map(c => c.toString(16).padStart(2, '0')).join('');
    document.getElementById('color-rgb').value = `rgb(${r}, ${g}, ${b})`;
    const [h, s, l] = rgbToHsl(r, g, b);
    document.getElementById('color-hsl').value = `hsl(${h}, ${s}%, ${l}%)`;
    document.getElementById('color-preview').style.background = `rgb(${r},${g},${b})`;
}

// ===== 快捷键 =====
document.addEventListener('keydown', (e) => {
    if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        document.getElementById('tool-search').focus();
    }
});

// ===== 初始化 =====
document.getElementById('color-hex').value = '#3498db';
document.getElementById('color-rgb').value = 'rgb(52, 152, 219)';
document.getElementById('color-hsl').value = 'hsl(204, 70%, 53%)';
document.getElementById('color-preview').style.background = '#3498db';

// 应用i18n（从localStorage恢复语言偏好）
applyI18n();
