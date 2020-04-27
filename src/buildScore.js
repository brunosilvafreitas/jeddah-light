
const buildScore = (obj, id) => {
  return {
    fetch_time: obj.fetchTime,
    console_erros: obj.audits['errors-in-console'].numericValue,
    site_url: obj.finalUrl,
    site_id: id,
    user_agent: obj.userAgent,
    emulated_as: obj.configSettings.emulatedFormFactor,
    accessibility: [{
      total_score: obj.categories.accessibility.score,
      bypass_repetitive_content: obj.audits.bypass.score === 1,
      color_contrast: obj.audits['color-contrast'].score === 1,
      document_title_found: obj.audits['document-title'].score === 1,
      no_duplicate_id_attribute: obj.audits['duplicate-id'].score === 1,
      html_has_lang_attribute: obj.audits['html-has-lang'].score === 1,
      html_lang_is_valid: obj.audits['html-lang-valid'].score === 1,
      images_have_alt_attribute: obj.audits['image-alt'].score === 1,
      form_elements_have_labels: obj.audits.label.score === 1,
      links_have_names: obj.audits['link-name'].score === 1,
      lists_are_well_formed: obj.audits.list.score === 1,
      list_items_within_proper_parents: obj.audits.listitem.score === 1,
      meta_viewport_allows_zoom: obj.audits['meta-viewport'].score === 1
    }],
    best_practices: [{
      total_score: obj.categories['best-practices'].score,
      avoid_application_cache: obj.audits['appcache-manifest'].score === 1,
      uses_https: obj.audits['is-on-https'].score === 1,
      uses_http2: obj.audits['uses-http2'].score === 1,
      uses_passive_event_listeners: obj.audits['uses-passive-event-listeners'].score === 1,
      no_document_write: obj.audits['no-document-write'].score === 1,
      external_anchors_use_rel_noopener: obj.audits['external-anchors-use-rel-noopener'].score === 1,
      no_geolocation_on_start: obj.audits['geolocation-on-start'].score === 1,
      doctype_defined: obj.audits.doctype.score === 1,
      no_vulnerable_libraries: obj.audits['no-vulnerable-libraries'].score === 1,
      notification_asked_on_start: obj.audits['notification-on-start'].score === 1,
      avoid_deprecated_apis: obj.audits.deprecations.score === 1,
      allow_paste_to_password_field: obj.audits['password-inputs-can-be-pasted-into'].score === 1,
      errors_in_console: obj.audits['errors-in-console'].score === 1,
      images_have_correct_aspect_ratio: obj.audits['image-aspect-ratio'].score === 1
    }],
    performance: [{
      total_score: obj.categories.performance.score,
      first_contentful_paint: [{
        raw_value: parseInt(obj.audits['first-contentful-paint'].numericValue),
        score: obj.audits['first-contentful-paint'].score
      }],
      first_meaningful_paint: [{
        raw_value: parseInt(obj.audits['first-meaningful-paint'].numericValue),
        score: obj.audits['first-meaningful-paint'].score
      }],
      speed_index: [{
        raw_value: parseInt(obj.audits['speed-index'].numericValue),
        score: obj.audits['speed-index'].score
      }],
      page_interactive: [{
        raw_value: parseInt(obj.audits.interactive.numericValue),
        score: obj.audits.interactive.score
      }],
      first_cpu_idle: [{
        raw_value: parseInt(obj.audits['first-cpu-idle'].numericValue),
        score: obj.audits['first-cpu-idle'].score
      }]
    }],
    pwa: [{
      total_score: obj.categories.pwa.score,
      load_fast_enough: obj.audits['load-fast-enough-for-pwa'].score === 1,
      works_offline: obj.audits['works-offline'].score === 1,
      installable_manifest: obj.audits['installable-manifest'].score === 1,
      uses_https: obj.audits['is-on-https'].score === 1,
      redirects_http_to_https: obj.audits['redirects-http'].score === 1,
      has_meta_viewport: obj.audits.viewport.score === 1,
      uses_service_worker: obj.audits['service-worker'].score === 1,
      works_without_javascript: obj.audits['without-javascript'].score === 1,
      splash_screen_found: obj.audits['splash-screen'].score === 1,
      themed_address_bar: obj.audits['themed-omnibox'].score === 1
    }],
    seo: [{
      total_score: obj.categories.seo.score,
      has_meta_viewport: obj.audits.viewport.score === 1,
      document_title_found: obj.audits['document-title'].score === 1,
      meta_description: obj.audits['meta-description'].score === 1,
      http_status_code: obj.audits['http-status-code'].score === 1,
      descriptive_link_text: obj.audits['link-text'].score === 1,
      is_crawlable: obj.audits['is-crawlable'].score === 1,
      robots_txt_valid: obj.audits['robots-txt'].score === 1,
      hreflang_valid: obj.audits.hreflang.score === 1,
      font_size_ok: obj.audits['font-size'].score === 1,
      plugins_ok: obj.audits.plugins.score === 1
    }]
  }
}

module.exports = buildScore
