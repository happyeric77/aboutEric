from wagtail.core import blocks

class CardBlock(blocks.StructBlock):
    """Card with  text and button"""
    title = blocks.CharBlock(max_length=40, required=True)
    text = blocks.TextBlock(required=True, max_length=200)
    button_url = blocks.CharBlock(max_length=40, required=True)

    class Meta:
        icon = 'placeholder'
        label = 'cards'
