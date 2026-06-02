const templateFields = [
      "produto", "identificador", "anomes", "chave_acesso_isp", "webhook_url_erp",
      "client_name", "client_document", "client_indicator_ie", "client_subscriber_type", "client_ie",
      "client_address_street", "client_address_number", "client_address_neighborhood", "client_address_city",
      "client_address_uf", "client_address_zip_code", "client_contacts_email", "client_contacts_phone",
      "item_code", "item_description", "item_classification_code", "item_cfop", "item_unity",
      "item_quantity", "item_unit_value", "competence", "due_date", "usage_period_start", "usage_period_end"
    ];

    const fieldLabels = {
      produto: "Produto",
      identificador: "Identificador",
      anomes: "Ano/mes",
      chave_acesso_isp: "Chave de acesso ISP",
      webhook_url_erp: "Webhook do ERP",
      client_name: "Nome do cliente",
      client_document: "CPF/CNPJ do cliente",
      client_indicator_ie: "Indicador de inscricao estadual",
      client_subscriber_type: "Tipo de assinante",
      client_ie: "Inscricao estadual",
      client_address_street: "Endereco",
      client_address_number: "Numero",
      client_address_neighborhood: "Bairro",
      client_address_city: "Cidade",
      client_address_uf: "UF",
      client_address_zip_code: "CEP",
      client_contacts_email: "E-mail",
      client_contacts_phone: "Telefone",
      item_code: "Codigo do item",
      item_description: "Descricao do item",
      item_classification_code: "Codigo de classificacao",
      item_cfop: "CFOP",
      item_unity: "Unidade",
      item_quantity: "Quantidade",
      item_unit_value: "Valor unitario",
      competence: "Competencia",
      due_date: "Data de vencimento",
      usage_period_start: "Inicio do periodo de uso",
      usage_period_end: "Fim do periodo de uso"
    };

    const requiredFields = new Set([
      "produto", "identificador", "anomes", "client_name", "client_document",
      "client_address_city", "client_address_uf", "item_code", "item_description",
      "item_quantity", "item_unit_value", "competence", "due_date"
    ]);

    const aliases = {
      identificador: ["identificador", "id_cliente", "id cliente", "id_contrato", "id contrato", "contrato", "login", "id", "id nota", "id_nf", "numero nota", "numero_nf", "numero nfs", "nota fiscal", "n nota"],
      chave_acesso_isp: ["chave_acesso_isp", "chave acesso", "chave_nf", "chave nfe", "chave_nf_isp", "chave nf-e", "chave nfs-e", "chave nota", "chave"],
      client_name: ["client_name", "razao", "razao social", "nome", "cliente", "nome_cliente", "fantasia", "destinatario", "tomador", "sacado"],
      client_document: ["client_document", "cnpj", "cpf", "documento", "cpf_cnpj", "cpf/cnpj", "cnpj_cpf", "documento cliente", "cnpj cliente", "cpf cliente"],
      client_indicator_ie: ["client_indicator_ie", "indicador ie", "ind_ie", "contribuinte"],
      client_subscriber_type: ["client_subscriber_type", "tipo assinante", "tipo_assinante", "tipo cliente"],
      client_ie: ["client_ie", "ie", "inscricao estadual", "inscricao_estadual"],
      client_address_street: ["client_address_street", "endereco", "logradouro", "rua", "endereco cliente"],
      client_address_number: ["client_address_number", "numero", "numero endereco", "numero_endereco", "n"],
      client_address_neighborhood: ["client_address_neighborhood", "bairro"],
      client_address_city: ["client_address_city", "cidade", "municipio"],
      client_address_uf: ["client_address_uf", "uf", "estado"],
      client_address_zip_code: ["client_address_zip_code", "cep"],
      client_contacts_email: ["client_contacts_email", "email", "e-mail", "mail"],
      client_contacts_phone: ["client_contacts_phone", "telefone", "celular", "fone", "whatsapp"],
      item_code: ["item_code", "codigo item", "codigo_item", "id_produto", "id_plano", "codigo plano", "produto_codigo", "codigo servico", "codigo produto"],
      item_description: ["item_description", "descricao", "descricao item", "plano", "produto", "servico", "nome_plano", "descricao produto", "descricao servico"],
      item_classification_code: ["item_classification_code", "codigo classificacao", "ncm", "classificacao", "codigo ibge servico", "codigo servico lc"],
      item_cfop: ["item_cfop", "cfop"],
      item_unity: ["item_unity", "unidade", "un"],
      item_quantity: ["item_quantity", "quantidade", "qtd", "qtde"],
      item_unit_value: ["item_unit_value", "valor", "valor unitario", "valor_unitario", "preco", "mensalidade", "valor nota", "valor_nf", "valor total", "total"],
      competence: ["competence", "competencia", "mes competencia", "referencia", "mes referencia", "periodo", "data emissao", "emissao", "data_emissao"],
      due_date: ["due_date", "vencimento", "data vencimento", "data_vencimento", "venc boleto", "vencimento boleto"],
      usage_period_start: ["usage_period_start", "periodo inicio", "inicio periodo", "data_inicio", "inicio", "data inicial"],
      usage_period_end: ["usage_period_end", "periodo fim", "fim periodo", "data_fim", "fim", "data final"]
    };

    const sampleRow = {
      produto: "fixa",
      identificador: "1930902255",
      anomes: "202510",
      chave_acesso_isp: "21251007335723000352620010000000041051694086",
      webhook_url_erp: "https://exemplo.com/webhook",
      client_name: "EMPRESA TESTE LTDA",
      client_document: "12345678000199",
      client_indicator_ie: 1,
      client_subscriber_type: 1,
      client_ie: "ISENTO",
      client_address_street: "Rua das Flores",
      client_address_number: "123",
      client_address_neighborhood: "Centro",
      client_address_city: "Sao Paulo",
      client_address_uf: "MA",
      client_address_zip_code: "01000000",
      client_contacts_email: "contato@empresa.com",
      client_contacts_phone: "11999999999",
      item_code: "ITEM001",
      item_description: "Descricao do Item Teste",
      item_classification_code: "1300101",
      item_cfop: "5102",
      item_unity: "UN",
      item_quantity: 1,
      item_unit_value: 49.9,
      competence: "2025-01",
      due_date: "2025-01-20",
      usage_period_start: "2025-01-01",
      usage_period_end: "2025-01-31"
    };

    const state = {
      sourceRows: [],
      sourceColumns: [],
      mapping: {},
      finalRows: [],
      errors: [],
      defaults: {
        produto: "fixa",
        anomes: "",
        webhook_url_erp: ""
      }
    };

    const els = {
      rowsStat: document.getElementById("rowsStat"),
      mappedStat: document.getElementById("mappedStat"),
      validStat: document.getElementById("validStat"),
      errorStat: document.getElementById("errorStat"),
      fileInput: document.getElementById("fileInput"),
      mappingGrid: document.getElementById("mappingGrid"),
      previewWrap: document.getElementById("previewWrap"),
      errorsList: document.getElementById("errorsList"),
      exportBtn: document.getElementById("exportBtn"),
      autoMapBtn: document.getElementById("autoMapBtn"),
      sampleBtn: document.getElementById("sampleBtn"),
      resetBtn: document.getElementById("resetBtn"),
      searchInput: document.getElementById("searchInput"),
      mappingStatus: document.getElementById("mappingStatus"),
      previewStatus: document.getElementById("previewStatus"),
      validationStatus: document.getElementById("validationStatus")
    };

    function normalize(value) {
      return String(value || "")
        .trim()
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/[_-]+/g, " ")
        .replace(/\s+/g, " ");
    }

    function asDate(value) {
      if (!value) return "";
      if (value instanceof Date && !Number.isNaN(value.getTime())) {
        return value.toISOString().slice(0, 10);
      }
      if (typeof value === "number") {
        const parsed = XLSX.SSF.parse_date_code(value);
        if (parsed) {
          return `${parsed.y}-${String(parsed.m).padStart(2, "0")}-${String(parsed.d).padStart(2, "0")}`;
        }
      }
      const text = String(value).trim();
      const br = text.match(/^(\d{2})\/(\d{2})\/(\d{4})$/);
      if (br) return `${br[3]}-${br[2]}-${br[1]}`;
      return text;
    }

    function defaultCompetence() {
      const anomes = String(state.defaults.anomes || "").trim();
      if (/^\d{6}$/.test(anomes)) return `${anomes.slice(0, 4)}-${anomes.slice(4, 6)}`;
      return "";
    }

    function monthBoundary(type) {
      const competence = defaultCompetence();
      if (!competence) return "";
      const [year, month] = competence.split("-").map(Number);
      const day = type === "end" ? new Date(year, month, 0).getDate() : 1;
      return `${year}-${String(month).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
    }

    function cleanDocument(value) {
      return String(value || "").replace(/\D/g, "");
    }

    function cleanPhone(value) {
      const text = String(value || "");
      const candidates = text.match(/(?:\(?\d{2}\)?\s*)?\d{4,5}[-\s]?\d{4}/g) || [];
      const first = candidates
        .map(candidate => candidate.replace(/\D/g, ""))
        .find(candidate => candidate.length >= 10 && candidate.length <= 11);
      if (first) return first;
      const digits = text.replace(/\D/g, "");
      return digits.slice(0, 11);
    }

    function cleanZip(value) {
      return String(value || "").replace(/\D/g, "");
    }

    function cleanAccessKey(value) {
      const digits = String(value || "").replace(/\D/g, "");
      return digits.length === 44 ? digits : "";
    }

    function parseMoney(value) {
      if (typeof value === "number") return value;
      const text = String(value || "").trim().replace(/[^\d,.-]/g, "");
      if (!text) return "";
      if (text.includes(",")) return Number(text.replace(/\./g, "").replace(",", ".")) || value;
      return Number(text) || value;
    }

    function anomesFromDate(value) {
      const direct = String(value || "").trim();
      if (/^\d{6}$/.test(direct)) return direct;
      const date = asDate(value);
      const iso = String(date || "").match(/^(\d{4})-(\d{2})/);
      if (iso) return `${iso[1]}${iso[2]}`;
      return "";
    }

    function inferDefaults(rows) {
      const joined = rows.map(row => Object.values(row).join(" ")).join(" ");
      const date = joined.match(/\b\d{2}\/\d{2}\/\d{4}\b/)?.[0];
      const anomes = rows
        .map(row => row.anomes || row.competence || row.competencia || row["data emissao"] || row.emissao || date)
        .map(anomesFromDate)
        .find(Boolean);

      state.defaults = {
        produto: "fixa",
        anomes: anomes || "",
        webhook_url_erp: ""
      };
    }

    function fieldValue(field, row) {
      const source = state.mapping[field];
      let value = source ? row[source] : "";

      if (field === "produto" && !value) value = state.defaults.produto;
      if (field === "anomes" && !value) value = state.defaults.anomes;
      if (field === "webhook_url_erp" && !value) value = state.defaults.webhook_url_erp;
      if (field === "client_indicator_ie" && !value) value = 1;
      if (field === "client_subscriber_type" && !value) value = 1;
      if (field === "client_ie" && !value) value = "ISENTO";
      if (field === "item_unity" && !value) value = "UN";
      if (field === "item_quantity" && !value) value = 1;
      if (field === "competence" && !value) value = defaultCompetence();
      if (field === "usage_period_start" && !value) value = monthBoundary("start");
      if (field === "usage_period_end" && !value) value = monthBoundary("end");

      if (["due_date", "usage_period_start", "usage_period_end"].includes(field)) value = asDate(value);
      if (field === "competence" && value) {
        const date = asDate(value);
        value = /^\d{4}-\d{2}/.test(date) ? date.slice(0, 7) : value;
      }
      if (field === "client_document") value = cleanDocument(value);
      if (field === "client_contacts_phone") value = cleanPhone(value);
      if (field === "client_address_zip_code") value = cleanZip(value);
      if (field === "item_unit_value") value = parseMoney(value);
      if (field === "item_quantity") value = Number(value) || value;

      return value ?? "";
    }

    function autoMap() {
      const normalizedColumns = state.sourceColumns.map(column => ({
        raw: column,
        normalized: normalize(column)
      }));

      templateFields.forEach(field => {
        const options = [field, ...(aliases[field] || [])].map(normalize);
        const exact = normalizedColumns.find(column => options.includes(column.normalized));
        const partial = normalizedColumns.find(column =>
          options.some(option => column.normalized.includes(option) || option.includes(column.normalized))
        );
        if (exact || partial) state.mapping[field] = (exact || partial).raw;
      });

      renderMapping();
      rebuild();
    }

    function renderMapping() {
      els.mappingGrid.innerHTML = "";
      templateFields.forEach(field => {
        const wrap = document.createElement("div");
        wrap.className = "map-field";

        const name = document.createElement("b");
        name.textContent = fieldLabels[field] || field;
        name.title = field;

        const badge = document.createElement("span");
        badge.className = requiredFields.has(field) ? "badge warn" : "badge";
        badge.textContent = requiredFields.has(field) ? "Obrigatorio" : "Opcional";

        const select = document.createElement("select");
        select.dataset.field = field;
        select.innerHTML = `<option value="">Valor padrao ou vazio</option>` + state.sourceColumns
          .map(column => `<option value="${escapeHtml(column)}">${escapeHtml(column)}</option>`)
          .join("");
        select.value = state.mapping[field] || "";
        select.addEventListener("change", event => {
          const next = event.target.value;
          if (next) state.mapping[field] = next;
          else delete state.mapping[field];
          rebuild();
          renderMapping();
        });

        wrap.append(name, badge, select);
        els.mappingGrid.appendChild(wrap);
      });

      const mapped = Object.keys(state.mapping).filter(field => state.mapping[field]).length;
      els.mappingStatus.textContent = mapped ? `${mapped} campos mapeados` : "Aguardando arquivo";
      els.mappingStatus.className = mapped ? "badge ok" : "badge";
      els.mappedStat.textContent = mapped;
    }

    function rebuild() {
      state.finalRows = state.sourceRows.map(row => {
        const output = {};
        templateFields.forEach(field => output[field] = fieldValue(field, row));
        return output;
      });
      validate();
      renderPreview();
      renderErrors();
      updateStats();
    }

    function validate() {
      state.errors = [];
      state.finalRows.forEach((row, index) => {
        requiredFields.forEach(field => {
          if (row[field] === "" || row[field] === null || row[field] === undefined) {
            state.errors.push({ row: index + 2, field, message: "Campo obrigatorio vazio" });
          }
        });

        if (row.client_document && ![11, 14].includes(String(row.client_document).length)) {
          state.errors.push({ row: index + 2, field: "client_document", message: "Documento deve ter 11 ou 14 digitos" });
        }

        if (row.client_address_uf && !/^[A-Z]{2}$/i.test(String(row.client_address_uf))) {
          state.errors.push({ row: index + 2, field: "client_address_uf", message: "UF deve ter 2 letras" });
        }

        if (row.anomes && !/^\d{6}$/.test(String(row.anomes))) {
          state.errors.push({ row: index + 2, field: "anomes", message: "Ano/mes deve seguir o formato AAAAMM" });
        }
      });
    }

    function renderPreview() {
      const search = normalize(els.searchInput.value);
      const rows = search
        ? state.finalRows.filter(row => normalize(Object.values(row).join(" ")).includes(search))
        : state.finalRows;

      if (!rows.length) {
        els.previewWrap.innerHTML = `<div class="empty">${state.finalRows.length ? "Nenhum registro encontrado." : "Nenhum arquivo importado."}</div>`;
        els.previewStatus.textContent = state.finalRows.length ? "Filtro sem resultado" : "Sem dados";
        els.previewStatus.className = "badge";
        return;
      }

      const errorRows = new Set(state.errors.map(error => error.row - 2));
      const head = templateFields.map(field => `<th title="${escapeHtml(field)}">${escapeHtml(fieldLabels[field] || field)}</th>`).join("");
      const body = rows.slice(0, 250).map(row => {
        const originalIndex = state.finalRows.indexOf(row);
        return `<tr class="${errorRows.has(originalIndex) ? "invalid" : ""}">${
          templateFields.map(field => `<td title="${escapeHtml(row[field])}">${escapeHtml(row[field])}</td>`).join("")
        }</tr>`;
      }).join("");

      els.previewWrap.innerHTML = `<table><thead><tr>${head}</tr></thead><tbody>${body}</tbody></table>`;
      els.previewStatus.textContent = `${rows.length} registros`;
      els.previewStatus.className = state.errors.length ? "badge warn" : "badge ok";
    }

    function renderErrors() {
      if (!state.finalRows.length) {
        els.errorsList.innerHTML = `<div class="empty">As pendencias aparecem aqui depois da importacao.</div>`;
        els.validationStatus.textContent = "Sem validacao";
        els.validationStatus.className = "badge";
        return;
      }

      if (!state.errors.length) {
        els.errorsList.innerHTML = `<div class="empty">Todos os registros passaram na validacao.</div>`;
        els.validationStatus.textContent = "Tudo certo";
        els.validationStatus.className = "badge ok";
        return;
      }

      els.errorsList.innerHTML = state.errors.slice(0, 200).map(error => `
        <div class="error-row">
          <i data-lucide="circle-alert"></i>
          <div><strong>Linha ${error.row}</strong> - ${escapeHtml(fieldLabels[error.field] || error.field)}<br>${escapeHtml(error.message)}</div>
        </div>
      `).join("");
      els.validationStatus.textContent = `${state.errors.length} pendencias`;
      els.validationStatus.className = "badge danger";
      lucide.createIcons();
    }

    function updateStats() {
      const invalidRows = new Set(state.errors.map(error => error.row));
      els.rowsStat.textContent = state.sourceRows.length;
      els.validStat.textContent = Math.max(state.finalRows.length - invalidRows.size, 0);
      els.errorStat.textContent = state.errors.length;
      els.exportBtn.disabled = !state.finalRows.length;
    }

    function exportXlsx() {
      if (!state.finalRows.length) return;
      const ws = XLSX.utils.json_to_sheet(state.finalRows, { header: templateFields });
      const wb = XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(wb, ws, "Modelo");
      const stamp = new Date().toISOString().slice(0, 10);
      const anomes = String(state.defaults.anomes || "").trim();
      const suffix = /^\d{6}$/.test(anomes) ? anomes : stamp;
      XLSX.writeFile(wb, `cofaturamento_tip_brasil_${suffix}.xlsx`);
    }

    function loadRows(rows) {
      state.sourceRows = rows.filter(row => Object.values(row).some(value => value !== "" && value !== null && value !== undefined));
      state.sourceColumns = Array.from(new Set(state.sourceRows.flatMap(row => Object.keys(row))));
      state.mapping = {};
      inferDefaults(state.sourceRows);
      autoMap();
    }

    function loadSample() {
      state.sourceRows = [sampleRow];
      state.sourceColumns = templateFields.slice();
      state.mapping = Object.fromEntries(templateFields.map(field => [field, field]));
      inferDefaults(state.sourceRows);
      renderMapping();
      rebuild();
    }

    function reset() {
      state.sourceRows = [];
      state.sourceColumns = [];
      state.mapping = {};
      state.finalRows = [];
      state.errors = [];
      state.defaults = { produto: "fixa", anomes: "", webhook_url_erp: "" };
      els.fileInput.value = "";
      els.searchInput.value = "";
      renderMapping();
      renderPreview();
      renderErrors();
      updateStats();
    }

    function escapeHtml(value) {
      return String(value ?? "")
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;");
    }

    function pick(text, patterns) {
      for (const pattern of patterns) {
        const found = text.match(pattern);
        if (found?.[1]) return found[1].trim();
      }
      return "";
    }

    function cleanPicked(value) {
      return String(value || "")
        .replace(/\s{2,}/g, " ")
        .replace(/\s*[-|]\s*$/, "")
        .replace(/^(cliente|tomador|destinatario|produto|servico|plano)\s*[:.-]\s*/i, "")
        .replace(/^contatos?\b.*$/i, "")
        .replace(/\s+(contatos?|telefone|fone|e-?mail)\b.*$/i, "")
        .trim();
    }

    function pickClean(text, patterns) {
      return cleanPicked(pick(text, patterns));
    }

    function inferProductType(description) {
      const value = normalize(description);
      if (/\b(movel|mobile|chip|simcard|sim card|telefonia|linha)\b/.test(value)) return "movel";
      if (/\b(dados|internet|banda larga|fibra|link)\b/.test(value)) return "dados";
      return "fixa";
    }

    function extractAddressParts(text) {
      const addressBlock = pickClean(text, [
        /endere[cç]o\s*(?:do\s+cliente|tomador)?[:\s]+(.+?)(?:\s+e-?mail|\s+telefone|\s+CNPJ|\s+CPF|\s+inscri[cç][aă]o|\s+produto|\s+servi[cç]o|$)/i,
        /logradouro[:\s]+(.+?)(?:\s+e-?mail|\s+telefone|\s+CNPJ|\s+CPF|\s+inscri[cç][aă]o|\s+produto|\s+servi[cç]o|$)/i
      ]);
      const source = addressBlock || text;
      const cityUfMatch = source.match(/(?:cidade|munic[ií]pio)[:\s]+(.+?)\s*[-/]\s*([A-Z]{2})\b/i)
        || source.match(/([A-Z][A-Z\s.'-]{2,})\s*[-/]\s*([A-Z]{2})\b(?:\s+CEP|\s+\d{5})/i);

      return {
        street: pickClean(source, [
          /((?:rua|avenida|av\.?|travessa|estrada|rodovia|alameda|logradouro)\s+.+?)(?:,\s*n?[şo]?\s*\d+|\s+-\s*bairro|\s+bairro|\s+CEP|$)/i,
          /endere[cç]o[:\s]+(.+?)(?:\s+bairro|\s+CEP|$)/i
        ]),
        number: pickClean(source, [
          /(?:n[şo]?|numero|n[uú]mero)[:\s.,-]+([0-9]{1,6}[A-Z]?)/i,
          /,\s*([0-9]{1,6}[A-Z]?)\b/
        ]),
        neighborhood: pickClean(source, [
          /bairro[:\s]+(.+?)(?:\s+cidade|\s+munic[ií]pio|\s+UF|\s+CEP|\s+\d{5}-?\d{3}|$)/i
        ]),
        city: cityUfMatch ? cleanPicked(cityUfMatch[1]) : pickClean(source, [/(?:cidade|munic[ií]pio)[:\s]+(.+?)(?:\s+UF|\s+Estado|\s+CEP|$)/i]),
        uf: cityUfMatch ? cleanPicked(cityUfMatch[2]) : pickClean(source, [/\bUF[:\s]+([A-Z]{2})\b/i, /\bEstado[:\s]+([A-Z]{2})\b/i]),
        zip: pickClean(source, [/CEP[:\s]+([\d.-]{8,10})/i, /\b(\d{5}-?\d{3})\b/])
      };
    }

    function stateToUf(value) {
      const normalized = normalize(value);
      const states = {
        acre: "AC", alagoas: "AL", amapa: "AP", amazonas: "AM", bahia: "BA", ceara: "CE",
        "distrito federal": "DF", "espirito santo": "ES", goias: "GO", maranhao: "MA",
        "mato grosso": "MT", "mato grosso do sul": "MS", "minas gerais": "MG", para: "PA",
        paraiba: "PB", parana: "PR", pernambuco: "PE", piaui: "PI", "rio de janeiro": "RJ",
        "rio grande do norte": "RN", "rio grande do sul": "RS", rondonia: "RO", roraima: "RR",
        "santa catarina": "SC", "sao paulo": "SP", sergipe: "SE", tocantins: "TO"
      };
      return states[normalized] || "";
    }

    function parseStreetLine(line) {
      const text = cleanPicked(line);
      const comma = text.match(/^(.+?),\s*([0-9]{1,6}[A-Z]?)\s*(?:-|,)?\s*(.*)$/i);
      if (comma) return { street: comma[1], number: comma[2], neighborhood: cleanPicked(comma[3]) };

      const spaced = text.match(/^((?:Rua|Avenida|Av\.?|Travessa|Estrada|Rodovia|Alameda)\s+.+?)\s+([0-9]{1,6}[A-Z]?)\s+(.*)$/i);
      if (spaced) return { street: spaced[1], number: spaced[2], neighborhood: cleanPicked(spaced[3]) };

      return { street: text, number: "", neighborhood: "" };
    }

    function parseCityLine(line) {
      const text = cleanPicked(line);
      const withCepFirst = text.match(/^(\d{5}-?\d{3})\s+(.+?)\s*-\s*([A-Z]{2})$/i);
      if (withCepFirst) return { zip: withCepFirst[1], city: withCepFirst[2], uf: withCepFirst[3].toUpperCase() };

      const withSlashState = text.match(/^(.+?)\s*\/\s*Estado\s+de\s+(.+?)\s+CEP:\s*(\d{5}-?\d{3})$/i);
      if (withSlashState) return { zip: withSlashState[3], city: withSlashState[1], uf: stateToUf(withSlashState[2]) };

      const cityUf = text.match(/^(.+?)\s*[-/]\s*([A-Z]{2})\b.*?(?:CEP[:\s]*(\d{5}-?\d{3}))?$/i);
      if (cityUf) return { zip: cityUf[3] || "", city: cityUf[1], uf: cityUf[2].toUpperCase() };

      return { zip: "", city: "", uf: "" };
    }

    function extractLineBasedFields(text) {
      const lines = text.split(/\r?\n/).map(cleanPicked).filter(Boolean);
      const out = {};

      const docIndex = lines.findIndex(line => /^(CNPJ\/CPF|CPF\/CNPJ|CNPJ|CPF)[:\s]/i.test(line) && /\d/.test(line));
      if (docIndex > 2) {
        out.client_name = lines[docIndex - 3];
        Object.assign(out, parseStreetLine(lines[docIndex - 2]));
        Object.assign(out, parseCityLine(lines[docIndex - 1] || ""));
      }

      const destIndex = lines.findIndex(line => /^Destinat[aá]rio:?$/i.test(line));
      if (destIndex >= 0 && lines[destIndex + 1]) {
        const dest = lines[destIndex + 1].match(/^(\d+)\s*-\s*(.+)$/);
        if (dest) {
          out.identificador = dest[1];
          out.client_name = dest[2];
        } else {
          out.client_name = lines[destIndex + 1];
        }
        Object.assign(out, parseStreetLine(lines[destIndex + 2] || ""));
        Object.assign(out, parseCityLine(lines[destIndex + 3] || ""));
      }

      const nfeNameIndex = lines.findIndex(line => /^NOME\s*\/\s*RAZ/i.test(line));
      if (nfeNameIndex >= 0 && lines[nfeNameIndex + 1]) out.client_name = lines[nfeNameIndex + 1];

      const addressLabelIndex = lines.findIndex(line => /^ENDERE[CÇ]O$/i.test(line));
      if (addressLabelIndex >= 0 && lines[addressLabelIndex + 1]) Object.assign(out, parseStreetLine(lines[addressLabelIndex + 1]));

      const neighborhoodLabelIndex = lines.findIndex(line => /^BAIRRO\s*\/\s*DISTRITO$/i.test(line));
      if (neighborhoodLabelIndex >= 0 && lines[neighborhoodLabelIndex + 1]) out.neighborhood = lines[neighborhoodLabelIndex + 1];

      const cepLabelIndex = lines.findIndex(line => /^CEP$/i.test(line));
      if (cepLabelIndex >= 0 && lines[cepLabelIndex + 1]) out.zip = lines[cepLabelIndex + 1];

      const cityLabelIndex = lines.findIndex(line => /^MUNIC[IÍ]PIO$/i.test(line));
      if (cityLabelIndex >= 0 && lines[cityLabelIndex + 1]) out.city = lines[cityLabelIndex + 1];

      const ufLabelIndex = lines.findIndex(line => /^UF$/i.test(line));
      if (ufLabelIndex >= 0 && lines[ufLabelIndex + 1]) out.uf = lines[ufLabelIndex + 1].slice(0, 2).toUpperCase();

      const noteLine = lines.find(line => /NOTA FISCAL.*N/i.test(line));
      const noteMatch = noteLine?.match(/NOTA FISCAL\s*N[º°.]?\s*([0-9.]+)/i);
      if (noteMatch) out.identificador = noteMatch[1].replace(/\D/g, "");

      const contractLine = lines.find(line => /N[º°]\s*do\s*Contrato/i.test(line));
      const contractMatch = contractLine?.match(/Contrato:\s*([0-9]+)/i);
      if (!out.identificador && contractMatch) out.identificador = contractMatch[1];

      const itemLine = lines.find(line => /\bTIP\b/i.test(line) && /\b\d{7}\b/.test(line))
        || lines.find(line => /\b(1300101|0600601|0100401)\b/.test(line) && /TIP|Movel|M[oó]vel|Telefonia|Internet|Servico|Servi[cç]o/i.test(line));
      if (itemLine) {
        const item = itemLine.match(/^(.+?)\s+(\d{7})\s+UN\s+\d+/i);
        if (item) {
          out.item_description = cleanPicked(item[1]);
          out.item_classification_code = item[2];
        }
      }

      const emailLine = lines.find(line => /@/.test(line));
      const emailMatch = emailLine?.match(/[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/i);
      if (emailMatch) out.email = emailMatch[0];

      const keyIndex = lines.findIndex(line => /CHAVE\s+DE\s+ACESSO/i.test(line));
      if (keyIndex >= 0) {
        const nearby = lines.slice(keyIndex, keyIndex + 4).join(" ");
        out.access_key = cleanAccessKey(nearby);
      }
      if (!out.access_key) {
        const keyCandidate = lines.find(line => cleanAccessKey(line));
        if (keyCandidate) out.access_key = cleanAccessKey(keyCandidate);
      }

      const phoneLine = lines.find(line => /(?:N[º°]?\s*TELEFONE|telefone|fone|celular|whatsapp)/i.test(line) && /\d{4,5}[-\s]?\d{4}/.test(line));
      const phoneMatch = phoneLine?.match(/(?:\(?\d{2}\)?\s*)?\d{4,5}[-\s]?\d{4}/);
      if (phoneMatch) out.phone = cleanPhone(phoneMatch[0]);

      const ieLine = lines.find(line => /(?:INSCRI[CÇ][AÃ]O\s+ESTADUAL|IE\/RG|IE)\s*:/i.test(line));
      if (ieLine) {
        const ieMatch = ieLine.match(/(?:INSCRI[CÇ][AÃ]O\s+ESTADUAL|IE\/RG|IE)\s*:\s*([A-Z0-9.-]+)/i);
        if (ieMatch && !/^(CHAVE|COD|C[OÓ]D|N[º°]|CPF|CNPJ)$/i.test(ieMatch[1])) out.ie = ieMatch[1];
      }

      return out;
    }

    function parsePdfNote(text) {
      const compact = text.replace(/\s+/g, " ").trim();
      const emissionDate = pick(compact, [
        /data\s+(?:de\s+)?emiss[aã]o[:\s]+(\d{2}\/\d{2}\/\d{4})/i,
        /emiss[aã]o[:\s]+(\d{2}\/\d{2}\/\d{4})/i
      ]);
      const dueDate = pick(compact, [
        /vencimento[:\s]+(\d{2}\/\d{2}\/\d{4})/i,
        /data\s+vencimento[:\s]+(\d{2}\/\d{2}\/\d{4})/i
      ]);
      const totalValue = pick(compact, [
        /valor\s+total\s+(?:da\s+nota|do\s+documento)?[:\s]+(?:R\$\s*)?([\d.]+,\d{2})/i,
        /total\s+(?:da\s+nota)?[:\s]+(?:R\$\s*)?([\d.]+,\d{2})/i,
        /R\$\s*([\d.]+,\d{2})/i
      ]);

      const row = {
        produto: "fixa",
        identificador: pick(compact, [
          /n[ºo]?\s*(?:da\s+)?nota(?:\s+fiscal)?[:\s]+([A-Z0-9.-]+)/i,
          /n[uú]mero\s+(?:da\s+)?nota[:\s]+([A-Z0-9.-]+)/i
        ]),
        anomes: anomesFromDate(emissionDate),
        chave_acesso_isp: cleanAccessKey(pick(compact, [/chave\s+(?:de\s+)?acesso[:\s]+([\d\s.:-]{44,80})/i, /\b((?:\d[\s.-]*){44})\b/])),
        webhook_url_erp: "",
        client_name: pickClean(compact, [
          /raz[aã]o\s+social[:\s]+(.+?)(?:\s+CNPJ|\s+CPF|\s+documento|\s+endere[cç]o|$)/i,
          /nome\s*(?:\/\s*raz[aã]o\s+social)?[:\s]+(.+?)(?:\s+CNPJ|\s+CPF|\s+documento|\s+endere[cç]o|$)/i,
          /tomador[:\s]+(.+?)(?:\s+CNPJ|\s+CPF|\s+documento|\s+endere[cç]o|$)/i
        ]),
        client_document: pick(compact, [
          /(?:CNPJ|CPF|CPF\/CNPJ|documento)[:\s]+([\d./-]{11,18})/i,
          /\b(\d{2}\.?\d{3}\.?\d{3}\/?\d{4}-?\d{2})\b/,
          /\b(\d{3}\.?\d{3}\.?\d{3}-?\d{2})\b/
        ]),
        client_indicator_ie: 1,
        client_subscriber_type: 1,
        client_ie: "ISENTO",
        client_address_street: pick(compact, [/endere[cç]o[:\s]+(.+?)(?:\s+Bairro|\s+Munic[ií]pio|\s+Cidade|\s+CEP|$)/i]),
        client_address_number: pick(compact, [/n[ºo]?\s*[:\s]+([A-Z0-9.-]+)/i]),
        client_address_neighborhood: pick(compact, [/bairro[:\s]+(.+?)(?:\s+Cidade|\s+Munic[ií]pio|\s+UF|\s+CEP|$)/i]),
        client_address_city: pick(compact, [/(?:cidade|munic[ií]pio)[:\s]+(.+?)(?:\s+UF|\s+Estado|\s+CEP|$)/i]),
        client_address_uf: pick(compact, [/\bUF[:\s]+([A-Z]{2})\b/i, /\bEstado[:\s]+([A-Z]{2})\b/i]),
        client_address_zip_code: pick(compact, [/CEP[:\s]+([\d.-]{8,10})/i]),
        client_contacts_email: pick(compact, [/([A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,})/i]),
        client_contacts_phone: pick(compact, [/(?:telefone|fone|celular)[:\s]+([\d ()-]{8,})/i]),
        item_code: pick(compact, [/(?:c[oó]digo\s+(?:do\s+)?(?:item|servi[cç]o|produto))[:\s]+([A-Z0-9.-]+)/i]) || "ITEM001",
        item_description: pick(compact, [
          /descri[cç][aã]o\s+(?:do\s+)?(?:item|servi[cç]o|produto)[:\s]+(.+?)(?:\s+valor|\s+quantidade|\s+R\$|$)/i,
          /servi[cç]o[:\s]+(.+?)(?:\s+valor|\s+quantidade|\s+R\$|$)/i
        ]) || "Servico IXC",
        item_classification_code: pick(compact, [/(?:classifica[cç][aã]o|ncm|c[oó]digo\s+servi[cç]o)[:\s]+([A-Z0-9.-]+)/i]),
        item_cfop: pick(compact, [/CFOP[:\s]+([0-9]{4})/i]),
        item_unity: "UN",
        item_quantity: 1,
        item_unit_value: totalValue,
        competence: anomesFromDate(emissionDate).replace(/^(\d{4})(\d{2})$/, "$1-$2"),
        due_date: dueDate,
        usage_period_start: "",
        usage_period_end: ""
      };

      const address = extractAddressParts(compact);
      const itemDescription = pickClean(compact, [
        /(?:produto|plano|servi[cç]o|descri[cç][aă]o\s+(?:do\s+)?(?:item|servi[cç]o|produto))[:\s]+(.+?)(?:\s+valor|\s+quantidade|\s+qtde|\s+qtd|\s+R\$|\s+c[oó]digo|\s+classifica[cç][aă]o|$)/i,
        /discrimina[cç][aă]o\s+(?:dos\s+)?servi[cç]os?[:\s]+(.+?)(?:\s+valor|\s+quantidade|\s+R\$|\s+c[oó]digo|$)/i
      ]);
      const classificationCode = pickClean(compact, [
        /(?:c[oó]digo\s+de\s+classifica[cç][aă]o|classifica[cç][aă]o|codigo\s+classificacao)[:\s]+([A-Z0-9.-]+)/i,
        /(?:c[oó]digo\s+(?:do\s+)?servi[cç]o|cod\s+servi[cç]o|item\s+lista\s+servi[cç]o)[:\s]+([A-Z0-9.-]+)/i,
        /\b(?:NCM|CNAE|LC\s*116)[:\s]+([A-Z0-9.-]+)/i
      ]);
      const email = pickClean(compact, [
        /e-?mail[:\s]+([A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,})/i,
        /([A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,})/i
      ]);
      const lineFields = extractLineBasedFields(text);

      row.identificador = lineFields.identificador || row.identificador;
      row.chave_acesso_isp = lineFields.access_key || row.chave_acesso_isp;
      row.client_name = lineFields.client_name || cleanPicked(row.client_name) || pickClean(compact, [
        /(?:tomador|destinat[aá]rio|cliente)[:\s]+(.+?)(?:\s+CNPJ|\s+CPF|\s+documento|\s+endere[cç]o|\s+e-?mail|$)/i
      ]);
      row.produto = inferProductType(itemDescription || row.item_description);
      row.item_description = lineFields.item_description || itemDescription || row.item_description;
      row.client_address_street = lineFields.street || address.street || row.client_address_street;
      row.client_address_number = lineFields.number || address.number;
      row.client_address_neighborhood = lineFields.neighborhood || address.neighborhood;
      row.client_address_city = lineFields.city || address.city || row.client_address_city;
      row.client_address_uf = lineFields.uf || address.uf || row.client_address_uf;
      row.client_address_zip_code = lineFields.zip || address.zip || row.client_address_zip_code;
      row.client_contacts_email = lineFields.email || email || row.client_contacts_email;
      row.client_contacts_phone = lineFields.phone || row.client_contacts_phone;
      row.client_ie = lineFields.ie || row.client_ie || "ISENTO";
      row.item_classification_code = lineFields.item_classification_code || classificationCode || row.item_classification_code;

      return row;
    }

    function textContentToLines(content) {
      const positioned = content.items
        .filter(item => String(item.str || "").trim())
        .map(item => ({
          text: item.str,
          x: item.transform?.[4] || 0,
          y: item.transform?.[5] || 0
        }))
        .sort((a, b) => (b.y - a.y) || (a.x - b.x));

      const rows = [];
      for (const item of positioned) {
        const row = rows.find(current => Math.abs(current.y - item.y) < 3);
        if (row) {
          row.items.push(item);
          row.y = (row.y + item.y) / 2;
        } else {
          rows.push({ y: item.y, items: [item] });
        }
      }

      return rows
        .sort((a, b) => b.y - a.y)
        .map(row => row.items
          .sort((a, b) => a.x - b.x)
          .map(item => item.text)
          .join(" ")
          .replace(/\s+/g, " ")
          .trim()
        )
        .filter(Boolean)
        .join("\n");
    }

    async function readPdfRow(file) {
      if (!window.pdfjsLib) throw new Error("Leitor de PDF nao carregou.");
      pdfjsLib.GlobalWorkerOptions.workerSrc = "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js";
      const data = await file.arrayBuffer();
      const pdf = await pdfjsLib.getDocument({ data }).promise;
      let text = "";
      for (let pageNumber = 1; pageNumber <= pdf.numPages; pageNumber += 1) {
        const page = await pdf.getPage(pageNumber);
        const content = await page.getTextContent();
        text += "\n" + textContentToLines(content);
      }
      if (!text.trim()) throw new Error("Nao consegui ler texto desse PDF. Se ele for imagem/scanner, exporte do IXC em XLSX, XLS ou CSV.");
      return { ...parsePdfNote(text), __arquivo: file.name };
    }

    async function readPdfRows(file) {
      return [await readPdfRow(file)];
    }

    async function readSheetRows(file) {
      const data = await file.arrayBuffer();
      const wb = XLSX.read(data, { type: "array", cellDates: true });
      const ws = wb.Sheets[wb.SheetNames[0]];
      return XLSX.utils.sheet_to_json(ws, { defval: "" });
    }

    async function readZipRows(file) {
      if (!window.JSZip) throw new Error("Leitor de ZIP nao carregou.");
      const zip = await JSZip.loadAsync(await file.arrayBuffer());
      const entries = Object.values(zip.files)
        .filter(entry => !entry.dir && entry.name.toLowerCase().endsWith(".pdf"));

      if (!entries.length) throw new Error("O ZIP nao possui PDFs de notas.");

      const rows = [];
      for (const entry of entries) {
        const blob = await entry.async("blob");
        const pdfFile = new File([blob], entry.name.split(/[\\/]/).pop(), { type: "application/pdf" });
        try {
          rows.push(await readPdfRow(pdfFile));
        } catch (error) {
          rows.push({
            __arquivo: pdfFile.name,
            produto: "fixa",
            item_description: `Falha ao ler ${pdfFile.name}`,
            client_name: "",
            identificador: "",
            anomes: "",
            client_document: ""
          });
        }
      }
      return rows;
    }

    async function readImportedRows(files) {
      const rows = [];
      for (const file of files) {
        const extension = file.name.split(".").pop().toLowerCase();
        if (extension === "pdf") {
          rows.push(await readPdfRow(file));
        } else if (extension === "zip") {
          rows.push(...await readZipRows(file));
        } else if (["xlsx", "xls", "csv"].includes(extension)) {
          rows.push(...await readSheetRows(file));
        }
      }
      return rows;
    }

    els.fileInput.addEventListener("change", async event => {
      const files = Array.from(event.target.files || []);
      if (!files.length) return;
      try {
        const rows = await readImportedRows(files);
        loadRows(rows);
      } catch (error) {
        reset();
        els.errorsList.innerHTML = `<div class="error-row"><i data-lucide="circle-alert"></i><div><strong>Falha ao importar</strong><br>${escapeHtml(error.message)}</div></div>`;
        els.validationStatus.textContent = "Erro de importacao";
        els.validationStatus.className = "badge danger";
        lucide.createIcons();
      }
    });

    els.autoMapBtn.addEventListener("click", autoMap);
    els.exportBtn.addEventListener("click", exportXlsx);
    els.sampleBtn.addEventListener("click", loadSample);
    els.resetBtn.addEventListener("click", reset);
    els.searchInput.addEventListener("input", renderPreview);

    document.querySelectorAll(".nav button").forEach(button => {
      button.addEventListener("click", () => {
        document.querySelectorAll(".nav button").forEach(item => item.classList.remove("active"));
        button.classList.add("active");
        const section = button.dataset.section;
        document.querySelector(`[data-panel="${section}"]`)?.scrollIntoView({ behavior: "smooth", block: "start" });
      });
    });

    renderMapping();
    renderPreview();
    renderErrors();
    updateStats();
    lucide.createIcons();
