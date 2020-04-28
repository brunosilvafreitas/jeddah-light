const buildScore = ({ lhr, jobId, reportPath }) => {
  return {
    fetch_time: lhr.fetchTime,
    console_erros: lhr.audits['errors-in-console'].numericValue,
    page_url: lhr.finalUrl,
    page_id: jobId,
    reportPath,
    user_agent: lhr.userAgent,
    emulated_as: lhr.configSettings.emulatedFormFactor,
    accessibility: [{
      total_score: lhr.categories.accessibility.score,
      bypass_repetitive_content: lhr.audits.bypass.score === 1,
      color_contrast: lhr.audits['color-contrast'].score === 1,
      document_title_found: lhr.audits['document-title'].score === 1,
      no_duplicate_id_attribute: lhr.audits['duplicate-id'].score === 1,
      html_has_lang_attribute: lhr.audits['html-has-lang'].score === 1,
      html_lang_is_valid: lhr.audits['html-lang-valid'].score === 1,
      images_have_alt_attribute: lhr.audits['image-alt'].score === 1,
      form_elements_have_labels: lhr.audits.label.score === 1,
      links_have_names: lhr.audits['link-name'].score === 1,
      lists_are_well_formed: lhr.audits.list.score === 1,
      list_items_within_proper_parents: lhr.audits.listitem.score === 1,
      meta_viewport_allows_zoom: lhr.audits['meta-viewport'].score === 1
    }],
    best_practices: [{
      total_score: lhr.categories['best-practices'].score,
      avoid_application_cache: lhr.audits['appcache-manifest'].score === 1,
      uses_https: lhr.audits['is-on-https'].score === 1,
      uses_http2: lhr.audits['uses-http2'].score === 1,
      uses_passive_event_listeners: lhr.audits['uses-passive-event-listeners'].score === 1,
      no_document_write: lhr.audits['no-document-write'].score === 1,
      external_anchors_use_rel_noopener: lhr.audits['external-anchors-use-rel-noopener'].score === 1,
      no_geolocation_on_start: lhr.audits['geolocation-on-start'].score === 1,
      doctype_defined: lhr.audits.doctype.score === 1,
      no_vulnerable_libraries: lhr.audits['no-vulnerable-libraries'].score === 1,
      notification_asked_on_start: lhr.audits['notification-on-start'].score === 1,
      avoid_deprecated_apis: lhr.audits.deprecations.score === 1,
      allow_paste_to_password_field: lhr.audits['password-inputs-can-be-pasted-into'].score === 1,
      errors_in_console: lhr.audits['errors-in-console'].score === 1,
      images_have_correct_aspect_ratio: lhr.audits['image-aspect-ratio'].score === 1
    }],
    performance: [{
      total_score: lhr.categories.performance.score,
      first_contentful_paint: [{
        raw_value: parseInt(lhr.audits['first-contentful-paint'].numericValue),
        score: lhr.audits['first-contentful-paint'].score
      }],
      first_meaningful_paint: [{
        raw_value: parseInt(lhr.audits['first-meaningful-paint'].numericValue),
        score: lhr.audits['first-meaningful-paint'].score
      }],
      speed_index: [{
        raw_value: parseInt(lhr.audits['speed-index'].numericValue),
        score: lhr.audits['speed-index'].score
      }],
      page_interactive: [{
        raw_value: parseInt(lhr.audits.interactive.numericValue),
        score: lhr.audits.interactive.score
      }],
      first_cpu_idle: [{
        raw_value: parseInt(lhr.audits['first-cpu-idle'].numericValue),
        score: lhr.audits['first-cpu-idle'].score
      }]
    }],
    pwa: [{
      total_score: lhr.categories.pwa.score,
      load_fast_enough: lhr.audits['load-fast-enough-for-pwa'].score === 1,
      works_offline: lhr.audits['works-offline'].score === 1,
      installable_manifest: lhr.audits['installable-manifest'].score === 1,
      uses_https: lhr.audits['is-on-https'].score === 1,
      redirects_http_to_https: lhr.audits['redirects-http'].score === 1,
      has_meta_viewport: lhr.audits.viewport.score === 1,
      uses_service_worker: lhr.audits['service-worker'].score === 1,
      works_without_javascript: lhr.audits['without-javascript'].score === 1,
      splash_screen_found: lhr.audits['splash-screen'].score === 1,
      themed_address_bar: lhr.audits['themed-omnibox'].score === 1
    }],
    seo: [{
      total_score: lhr.categories.seo.score,
      has_meta_viewport: lhr.audits.viewport.score === 1,
      document_title_found: lhr.audits['document-title'].score === 1,
      meta_description: lhr.audits['meta-description'].score === 1,
      http_status_code: lhr.audits['http-status-code'].score === 1,
      descriptive_link_text: lhr.audits['link-text'].score === 1,
      is_crawlable: lhr.audits['is-crawlable'].score === 1,
      robots_txt_valid: lhr.audits['robots-txt'].score === 1,
      hreflang_valid: lhr.audits.hreflang.score === 1,
      font_size_ok: lhr.audits['font-size'].score === 1,
      plugins_ok: lhr.audits.plugins.score === 1
    }]
  }
}

module.exports = buildScore
