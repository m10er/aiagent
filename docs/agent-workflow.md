## Agent Roles and Flow

- Test Manager Agent: yazılım test senaryosu/case üretir, kabul kriterlerini ekler, GitHub Issue açar ve `todo -> in-progress -> in-review -> done` durumlarını label veya Project sütunları ile yönetir.
- Automation Agent: üzerine atanan issue'yu alır, gerekli branch/PR'i açar, Playwright testlerini çalıştırır ve sonucu issue yorumuna ve Project durumuna yazar; bittiğinde `done` label'ı ile kapatır.

## Issue/Project Ayarları

- Issue tip label'ları: `type:bug`, `type:feature`, `type:task`.
- Durum label'ları: `todo`, `in-progress`, `in-review`, `done`.
- Önerilen Project sütunları: `Todo`, `In Progress`, `In Review`, `Done`. Label/sütun eşleşmesi aynı isimlerle yapılabilir.
- Issue şablonu (öneri): başlık, context, kabul kriterleri, test notları, ekler; varsa `@ui` veya `@api` tag bilgisi.

## Agent Çalışma Adımları

1) Test Manager Agent: yeni case/bug için Issue açar, uygun tip ve durum label'larını ekler, Project sütununu `Todo` yapar.
2) Automation Agent: Issue'yu alır (`In Progress`), gerekli branch/PR oluşturur; `npm test` veya `npm run test:ui|test:api` komutlarıyla Playwright'ı çalıştırır.
3) Sonuç paylaşımı (issue yorumu örneği):
   - Özet: kısa sonuç (örn. "UI smoke passed in chromium, firefox, webkit").
   - Komut: `npx playwright test --project=chromium --grep @ui`.
   - Sonuç: `pass: 3, fail: 0`; link: Playwright HTML report veya CI artifact.
   - İz/ekler: Trace/screenshot linkleri (CI artifact).
4) Issue/Project güncelleme: başarılı ise `done`, hata varsa `in-review` + ek bug issue'ları açılır.

## Komutlar

- Tüm testler: `npm test`
- UI etiketli testler: `npm run test:ui`
- API etiketli testler: `npm run test:api`
- Headed/etkileşimli: `npm run test:headed`
- Rapor görüntüleme: `npm run test:report`

## CI entegrasyonu

- Workflow: `.github/workflows/playwright.yml`
- Tetikleyiciler: push, pull request, veya manuel `workflow_dispatch`.
- Manuel tetikte `issue_number` girersen, CI run sonucu ilgili issue'ya yorum olarak düşer. Yorum içeriği: outcome, run linki, HTML report artifact bilgisi, kullanılan komut.
