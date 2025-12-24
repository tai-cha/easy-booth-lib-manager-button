console.log("Easy Booth Lib Button: Content script loaded");

const TARGET_TEXT = "BOOTH Library ManagerでDL";

function injectButtons() {
  // XPath to find the deepest element that DIRECTLY contains the text node.
  // This prevents matching parent containers that just "contain" the text in descendants.
  const xpath = `//*[text()[contains(., "${TARGET_TEXT}")]]`;
  const result = document.evaluate(xpath, document, null, XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, null);

  console.log(`Easy Booth Lib Button: Found ${result.snapshotLength} candidate elements.`);

  for (let i = 0; i < result.snapshotLength; i++) {
    const targetElement = result.snapshotItem(i) as HTMLElement;
    const container = targetElement.closest('.relative') as HTMLElement | null;

    // Check if we found a container and haven't injected yet
    if (container && !container.querySelector('.easy-booth-lib-trigger')) {
      const button = document.createElement('button');
      button.innerText = 'BOOTH Library ManagerでDL';
      button.className = 'easy-booth-lib-trigger';

      // Check container type for layout
      const isFitContent = container.classList.contains('w-fit');

      const buttonStyle: Partial<CSSStyleDeclaration> = {
        backgroundColor: '#fc4d50',
        color: 'white',
        border: 'none',
        borderRadius: '4px',
        fontSize: '14px',
        fontWeight: 'bold',
        cursor: 'pointer',
        textAlign: 'center',
        lineHeight: 'normal',
        boxSizing: 'border-box',
        padding: '8px'
      };

      if (isFitContent) {
        // Side-by-side layout for w-fit using Flexbox on the container
        container.style.display = 'flex';
        container.style.alignItems = 'center';
        container.style.gap = '8px'; // Add gap between items

        Object.assign(buttonStyle, {
          display: 'block', // Flex item behaves as block-ish
          width: 'auto',
          marginBottom: '0',
          marginRight: '0', // Handled by gap
          height: 'fit-content' // Ensure it doesn't stretch weirdly
        });
      } else {
        // Stacked layout for w-full (default)
        Object.assign(buttonStyle, {
          display: 'block',
          width: '100%',
          marginBottom: '8px',
          marginRight: '0'
        });
      }

      Object.assign(button.style, buttonStyle);

      button.addEventListener('click', (e) => {
        e.preventDefault(); // Prevent button form submission or default behavior
        e.stopPropagation();

        console.log("Easy Booth Lib Button: Dispatching click to", targetElement);

        // Dispatch a proper mouse click event
        const clickEvent = new MouseEvent('click', {
          bubbles: true,
          cancelable: true,
          view: window
        });
        targetElement.dispatchEvent(clickEvent);
      });

      container.prepend(button);
    }
  }
}

// Initial injection
if (document.body) {
  injectButtons();
} else {
  window.addEventListener("DOMContentLoaded", injectButtons);
}

// Observe for dynamic content changes
const observer = new MutationObserver(() => {
  injectButtons();
});

if (document.body) {
  observer.observe(document.body, { childList: true, subtree: true });
}
